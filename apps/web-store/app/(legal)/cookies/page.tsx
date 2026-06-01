export default function Page() {
  return (
    <main className="max-w-container mx-auto py-section px-content">
      <h1 className="font-display text-2xl uppercase tracking-wider mb-content">
        Política de Cookies
      </h1>

      <div className="space-y-6 text-neutral-600">
        <p>
          Utilizamos cookies para mejorar la experiencia de navegación,
          analizar el tráfico del sitio y optimizar nuestros servicios.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            ¿Qué son las cookies?
          </h2>
          <p>
            Son pequeños archivos de texto almacenados en su dispositivo
            cuando visita nuestro sitio web.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Tipos de cookies utilizadas
          </h2>

          <ul className="list-disc pl-6 space-y-2">
            <li>Cookies esenciales para el funcionamiento del sitio.</li>
            <li>Cookies de rendimiento y análisis.</li>
            <li>Cookies de personalización.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
