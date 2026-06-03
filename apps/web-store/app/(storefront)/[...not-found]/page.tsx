import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-background">
      <div className="max-w-(--width-container-max) mx-auto px-(--spacing-content) w-full text-center">
        {/* Marca de agua 404 */}
        <span className="font-display text-[12vw] font-bold leading-none tracking-tighter text-neutral-100 select-none pointer-events-none">
          404
        </span>

        <div className="-mt-8 md:-mt-16 relative z-10">
          <h1 className="font-display text-2xl md:text-4xl font-bold uppercase tracking-tighter mb-4 text-foreground">
            Espacio no encontrado
          </h1>
          <p className="font-sans text-xs md:text-sm text-neutral-500 uppercase tracking-[0.3em] mb-12 max-w-md mx-auto">
            Lo sentimos, la pieza o página que buscas no forma parte de nuestra colección actual.
          </p>

          <Link
            href="/"
            className="inline-block bg-primary text-primary-foreground px-12 py-4 font-sans text-[11px] uppercase tracking-[0.2em] hover:bg-neutral-800 transition-colors rounded-none"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
