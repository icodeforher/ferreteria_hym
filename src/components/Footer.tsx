export default function Footer() {
  return (
    <footer
      id="contacto"
      className="mt-12 border-t border-neutral-200 bg-white"
    >
      <div className="container py-8 text-sm text-neutral-600">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="font-semibold text-neutral-900">distribuidora de materiales h&amp;m.</h3>
            <p className="mt-2 max-w-prose">
              Materiales, herramientas y soluciones para tu hogar y obra.
            </p>
            <div>
              <h4 className="font-medium text-neutral-900">Horarios</h4>
              <p className="mt-2">Lun a Vie: 9:00 a 18:30</p>
              <p>Sab: 9:00 a 13:00</p>
            </div>
            <div>
            <h4 className="font-medium text-neutral-900">Contacto</h4>
            <p className="mt-2">WhatsApp: +57 312 495 4231</p>
            <p className="mt-1">Correo: distribuidora_hym@hotmail.com</p>
            <p className="mt-1">Dirección: carrera 10 #3-42. Chia</p>
            </div>
          </div>
          <div>
            <h4 className="font-medium text-neutral-900">Ubicación</h4>
            <div className="mt-3 overflow-hidden rounded-lg ring-1 ring-neutral-200 h-40 sm:h-48 md:h-64 lg:h-72">
              <iframe
                title="Mapa - Distribuidora de materiales h&amp;m"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=4.8646,-74.0522&z=15&output=embed"
              />
            </div>
            <div className="mt-2 flex items-center gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=carrera%2010%20%233-42%2C%20Ch%C3%ADa%2C%20Cundinamarca"
                target="_blank"
                rel="noreferrer"
                className="text-sm text-brick hover:underline"
              >
                Abrir en Google Maps
              </a>
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=carrera%2010%20%233-42%2C%20Ch%C3%ADa%2C%20Cundinamarca"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-brick px-3 py-1.5 text-sm text-white hover:bg-brick-700"
              >
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-200 pt-4 text-xs text-neutral-500">
          © {new Date().getFullYear()} distribuidora de materiales h&amp;m. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
