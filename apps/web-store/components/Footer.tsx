import Link from 'next/link';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-neutral-50 pt-20 pb-10">
      <div className="max-w-(--width-container-max) mx-auto px-(--spacing-content) w-full">
        {/* GRID PRINCIPAL */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
          {/* COLUMNA 1: BRAND */}
          <div className="col-span-2 md:col-span-1">
            <span className="font-display text-2xl font-bold tracking-tighter uppercase block mb-4">
              Recio
            </span>
            <p className="font-sans text-xs leading-relaxed text-neutral-500 uppercase tracking-widest max-w-62.5">
              Esenciales masculinos diseñados con precisión y materiales nobles para el hombre
              contemporáneo.
            </p>
          </div>

          {/* COLUMNA 2: TIENDA */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-6">
              Tienda
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/productos"
                  className="font-sans text-xs uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors"
                >
                  Ver Todo
                </Link>
              </li>
              <li>
                <Link
                  href="/nuevos"
                  className="font-sans text-xs uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors"
                >
                  Nuevos Ingresos
                </Link>
              </li>
              <li>
                <Link
                  href="/ofertas"
                  className="font-sans text-xs uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors"
                >
                  Ofertas
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 3: AYUDA */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-6">
              Asistencia
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/contacto"
                  className="font-sans text-xs uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors"
                >
                  Contacto
                </Link>
              </li>
              <li>
                <Link
                  href="/envios-y-devoluciones"
                  className="font-sans text-xs uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors"
                >
                  Envíos y Devoluciones
                </Link>
              </li>
              <li>
                <Link
                  href="/preguntas-frecuentes"
                  className="font-sans text-xs uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors"
                >
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>

          {/* COLUMNA 4: LEGAL */}
          <div>
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-6">
              Legal
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <Link
                  href="/terminos-de-servicio"
                  className="font-sans text-xs uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors"
                >
                  Términos de Servicio
                </Link>
              </li>
              <li>
                <Link
                  href="/politica-de-privacidad"
                  className="font-sans text-xs uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors"
                >
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link
                  href="/cookies"
                  className="font-sans text-xs uppercase tracking-widest text-neutral-500 hover:text-foreground transition-colors"
                >
                  Cookies
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* LÍNEA FINAL: COPYRIGHT */}
        <div className="border-t border-border pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-sans text-[11px] uppercase tracking-[0.25em] text-neutral-400">
            © {currentYear} RECIO. HECHO CON PRECISIÓN.
          </p>
          <div className="flex gap-8">
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-neutral-400 cursor-pointer hover:text-foreground transition-colors">
              INSTAGRAM
            </span>
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-neutral-400 cursor-pointer hover:text-foreground transition-colors">
              FACEBOOK
            </span>
            <span className="font-sans text-[11px] uppercase tracking-[0.25em] text-neutral-400 cursor-pointer hover:text-foreground transition-colors">
              TIKTOK
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
