export default function Footer() {
  return (
    <footer
      id="contacto"
      className="mt-12 border-t border-neutral-200 bg-white"
    >
      <div className="container py-8 text-sm text-neutral-600">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h3 className="font-semibold text-neutral-900">distribuidora de materiales h&amp;m.</h3>
            <p className="mt-2 max-w-prose">
              Materiales, herramientas y soluciones para tu hogar y obra.
            </p>
          </div>
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
        <div className="mt-8 border-t border-neutral-200 pt-4 text-xs text-neutral-500">
          © {new Date().getFullYear()} distribuidora de materiales h&amp;m. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
