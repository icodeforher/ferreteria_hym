import { useEffect, useMemo, useState, type ReactNode } from "react";
import type { QuoteDraft } from "../../types";
import { QuoteContext, STORAGE_KEY, readStored } from "./quote-context";

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState(readStored);

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, items }));
  }, [items]);

  const value = useMemo(
    () => ({
      items,
      add: (draft: QuoteDraft) => {
        const name = draft.name.trim().replace(/\s+/g, " ");
        if (!name || !draft.id) return;
        setItems((current) => {
          const existing = current.find((line) => line.id === draft.id);
          if (existing) {
            return current.map((line) =>
              line.id === draft.id ? { ...line, quantity: line.quantity + 1 } : line,
            );
          }
          return [
            ...current,
            {
              id: draft.id,
              name,
              reference: draft.reference,
              quantity: 1,
            },
          ];
        });
      },
      increase: (id: string) => {
        setItems((current) =>
          current.map((line) =>
            line.id === id ? { ...line, quantity: line.quantity + 1 } : line,
          ),
        );
      },
      decrease: (id: string) => {
        setItems((current) =>
          current.map((line) =>
            line.id === id && line.quantity > 1
              ? { ...line, quantity: line.quantity - 1 }
              : line,
          ),
        );
      },
      remove: (id: string) => {
        setItems((current) => current.filter((line) => line.id !== id));
      },
    }),
    [items],
  );

  return <QuoteContext.Provider value={value}>{children}</QuoteContext.Provider>;
}
