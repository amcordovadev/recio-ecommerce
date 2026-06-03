import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Términos de Servicio',
  description:
    'Consulta los términos de uso de Recio Ecommerce, incluyendo navegación, compras, responsabilidades y condiciones generales.',
};

type TermsSection = {
  title: string;
  body: string;
};

const termsSections: TermsSection[] = [
  {
    title: 'Uso permitido',
    body:
      'El usuario se compromete a navegar, consultar y comprar dentro de la plataforma de manera responsable, respetando la normativa vigente y los derechos de terceros.',
  },
  {
    title: 'Proceso de compra',
    body:
      'Toda orden queda sujeta a validación de stock, confirmación de pago y revisión interna para asegurar una experiencia de compra precisa y ordenada.',
  },
  {
    title: 'Precios y disponibilidad',
    body:
      'Los precios pueden modificarse sin previo aviso y la disponibilidad está sujeta al inventario existente al momento de procesar la solicitud.',
  },
  {
    title: 'Envíos, cambios y devoluciones',
    body:
      'Las entregas, cambios y devoluciones se rigen por las políticas publicadas en el sitio, las cuales complementan estos términos y definen el alcance operativo del servicio.',
  },
  {
    title: 'Limitación de responsabilidad',
    body:
      'Recio Ecommerce no será responsable por daños indirectos derivados del uso indebido de la plataforma, interrupciones técnicas o circunstancias ajenas a nuestro control razonable.',
  },
  {
    title: 'Modificaciones',
    body:
      'Nos reservamos el derecho de actualizar estos términos cuando sea necesario para reflejar cambios operativos, comerciales o legales.',
  },
];

const termsHighlights = [
  'Las compras están sujetas a confirmación de stock y pago.',
  'Los precios y la disponibilidad pueden cambiar sin previo aviso.',
  'El uso responsable de la plataforma es condición para acceder al servicio.',
];

export default function TerminosDeServicioPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <section className="w-full border-b border-border bg-secondary">
        <div className="max-w-(--width-container-max) mx-auto w-full px-(--spacing-content) py-12 sm:py-16">
          <p className="font-sans text-xs tracking-[0.18em] text-neutral-600 uppercase">
            Legal Recio
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight text-foreground sm:text-6xl">
            Términos de Servicio
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-sm leading-7 text-neutral-600 sm:text-base">
            El uso de esta plataforma implica la aceptación de las siguientes condiciones. Hemos
            redactado este documento con claridad para que tu experiencia de navegación y compra sea
            transparente.
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-(--width-container-max) mx-auto w-full px-(--spacing-content) py-section">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,0.9fr)]">
            <div className="space-y-6">
              {termsSections.map((section) => (
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
                Puntos clave
              </h2>
              <p className="font-sans text-sm leading-7 text-neutral-600">
                Estos términos acompañan la experiencia de compra y ayudan a mantener una relación
                clara y ordenada entre la marca y el usuario.
              </p>

              <div className="space-y-4 border-t border-border pt-6">
                {termsHighlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 bg-foreground" />
                    <p className="font-sans text-sm leading-6 text-neutral-600">{item}</p>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-6">
                <p className="font-sans text-xs tracking-[0.14em] text-neutral-400 uppercase">
                  Actualización de términos
                </p>
                <p className="mt-2 font-sans text-sm leading-6 text-neutral-600">
                  Si realizamos cambios relevantes en este documento, publicaremos la versión
                  actualizada en la plataforma para mantener la transparencia del servicio.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
