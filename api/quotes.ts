import { neon } from "@neondatabase/serverless";

type QuotePayload = {
  lines: number;
  units: number;
  references: string[];
};

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  status: (code: number) => { end: () => void };
};

let ready = false;

function connectionString() {
  return process.env.POSTGRES_URL || process.env.DATABASE_URL || "";
}

function parsePayload(input: unknown): QuotePayload | null {
  let value = input;
  if (typeof value === "string") {
    try {
      value = JSON.parse(value) as unknown;
    } catch {
      return null;
    }
  }
  if (!value || typeof value !== "object") return null;
  const record = value as { lines?: unknown; units?: unknown; references?: unknown };
  if (!Number.isInteger(record.lines) || !Number.isInteger(record.units)) return null;
  if (typeof record.lines !== "number" || typeof record.units !== "number") return null;
  if (record.lines < 1 || record.lines > 100) return null;
  if (record.units < record.lines || record.units > 10000) return null;
  if (!Array.isArray(record.references) || record.references.length !== record.lines) return null;
  const references = record.references.map((item) => (typeof item === "string" ? item.trim() : ""));
  if (references.some((item) => item.length === 0 || item.length > 40)) return null;
  return { lines: record.lines, units: record.units, references };
}

export async function handleQuote(input: unknown): Promise<number> {
  const payload = parsePayload(input);
  if (!payload) return 400;
  const url = connectionString();
  if (!url) return 503;

  const sql = neon(url);
  if (!ready) {
    await sql`
      CREATE TABLE IF NOT EXISTS quote_sends (
        id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
        created_at timestamptz NOT NULL DEFAULT now(),
        line_count integer NOT NULL,
        unit_count integer NOT NULL,
        refs text NOT NULL
      )
    `;
    ready = true;
  }

  const refs = JSON.stringify(payload.references);
  const recent = await sql`
    SELECT id FROM quote_sends
    WHERE line_count = ${payload.lines}
      AND unit_count = ${payload.units}
      AND refs = ${refs}
      AND created_at > now() - interval '8 seconds'
    LIMIT 1
  `;
  if (recent.length > 0) return 204;

  const burst = await sql`
    SELECT count(*)::int AS total FROM quote_sends
    WHERE created_at > now() - interval '1 minute'
  `;
  const total = Number(burst[0]?.total ?? 0);
  if (total >= 30) return 429;

  await sql`
    INSERT INTO quote_sends (line_count, unit_count, refs)
    VALUES (${payload.lines}, ${payload.units}, ${refs})
  `;
  return 204;
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== "POST") {
    res.status(405).end();
    return;
  }
  try {
    res.status(await handleQuote(req.body)).end();
  } catch {
    res.status(503).end();
  }
}
