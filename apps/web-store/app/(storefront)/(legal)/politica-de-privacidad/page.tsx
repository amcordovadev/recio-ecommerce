import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Conoce cómo Recio Ecommerce recopila, utiliza y protege la información personal de sus clientes.',
};

type PrivacySection = {
  title: string;
  body: string;
};

const privacySections: PrivacySection[] = [
  {
    title: 'Información que recopilamos',
    body:
      'Podemos recopilar datos necesarios para procesar pedidos, administrar cuentas, gestionar soporte y mantener una experiencia de compra precisa y segura.',
  },
  {
    title: 'Finalidad del uso',
    body:
      'La información se utiliza exclusivamente para prestar nuestros servicios, responder consultas, ejecutar compras y mejorar la experiencia del usuario dentro del ecosistema Recio.',
  },
  {
    title: 'Conservación y seguridad',
    body:
      'Aplicamos medidas razonables de control y protección para resguardar la información personal frente a accesos no autorizados, pérdida o uso indebido.',
  },
  {
    title: 'Derechos del usuario',
    body:
      'Puedes solicitar acceso, rectificación, actualización o eliminación de tus datos cuando corresponda, escribiendo a nuestros canales oficiales de contacto.',
  },
];

const privacyHighlights = [
  'No vendemos información personal a terceros.',
  'Solo compartimos datos cuando es necesario para operar el servicio.',
  'Podemos actualizar esta política si cambian los requisitos legales o funcionales.',
];

export default function PoliticaDePrivacidadPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <section className="w-full border-b border-border bg-secondary">
        <div className="max-w-(--width-container-max) mx-auto w-full px-(--spacing-content) py-12 sm:py-16">
          <p className="font-sans text-xs tracking-[0.18em] text-neutral-600 uppercase">
            Legal Recio
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight text-foreground sm:text-6xl">
            Política de Privacidad
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-sm leading-7 text-neutral-600 sm:text-base">
            En Recio Ecommerce protegemos la información personal de nuestros clientes con un
            enfoque claro, minimalista y orientado a la confianza.
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-(--width-container-max) mx-auto w-full px-(--spacing-content) py-section">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)]">
            <div className="space-y-6">
              {privacySections.map((section) => (
                <article key={section.title} className="border border-border rounded-none p-6 sm:p-8">
                  <h2 className="font-display text-2xl tracking-tight text-foreground">
                    {section.title}
                  </h2>
                  <p className="mt-4 font-sans text-sm leading-7 text-neutral-600 sm:text-base">
                    {section.body}
                  </p>
                </article>
              ))}
            </div>

            <aside className="space-y-6 border border-border rounded-none bg-neutral-50 p-6 sm:p-8">
              <h2 className="font-display text-2xl tracking-tight text-foreground">
                Principios de gestión
              </h2>
              <p className="font-sans text-sm leading-7 text-neutral-600">
                Nuestro enfoque mantiene una relación transparente con el usuario y limita el uso
                de datos a lo estrictamente necesario.
              </p>

              <div className="space-y-4 border-t border-border pt-6">
                {privacyHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-foreground" />
                    <p className="font-sans text-sm leading-6 text-neutral-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <p className="font-sans text-xs tracking-[0.14em] text-neutral-400 uppercase">
                  Contacto para privacidad
                </p>
                <p className="mt-2 font-display text-lg text-foreground">
                  privacidad@recio.com
                </p>
                <p className="mt-3 font-sans text-sm leading-6 text-neutral-600">
                  Si deseas ejercer tus derechos sobre tus datos personales, contáctanos por este
                  canal y atenderemos tu solicitud con la mayor prontitud posible.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
