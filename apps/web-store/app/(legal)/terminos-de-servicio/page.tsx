export default function Page() {
  return (
    <main className="max-w-container mx-auto py-section px-content">
      <h1 className="font-display text-2xl uppercase tracking-wider mb-content">
        Términos de Servicio
      </h1>

      <div className="space-y-6 text-neutral-600">
        <p>
          El uso de esta plataforma implica la aceptación de los presentes términos y condiciones.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Uso permitido</h2>

          <p>
            Los usuarios deberán utilizar el sitio de manera responsable y conforme a la legislación
            vigente.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">
            Limitación de responsabilidad
          </h2>

          <p>
            Recio Ecommerce no será responsable por daños derivados del uso indebido de la
            plataforma.
          </p>
        </section>
      </div>
    </main>
  );
}
