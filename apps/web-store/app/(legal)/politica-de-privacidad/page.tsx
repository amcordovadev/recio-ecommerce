export default function Page() {
  return (
    <main className="max-w-container mx-auto py-section px-content">
      <h1 className="font-display text-2xl uppercase tracking-wider mb-content">
        Política de Privacidad
      </h1>

      <div className="space-y-6 text-neutral-600">
        <p>
          En Recio Ecommerce valoramos la privacidad de nuestros usuarios y protegemos la
          información personal proporcionada.
        </p>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Información recopilada</h2>

          <p>
            Podemos recopilar datos necesarios para procesar pedidos, gestionar cuentas y brindar
            soporte al cliente.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-foreground mb-2">Uso de la información</h2>

          <p>
            La información recopilada será utilizada exclusivamente para la prestación de nuestros
            servicios y la mejora de la experiencia del usuario.
          </p>
        </section>
      </div>
    </main>
  );
}
