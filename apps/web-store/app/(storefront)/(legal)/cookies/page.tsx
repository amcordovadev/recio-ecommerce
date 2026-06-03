import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Política de Cookies',
  description:
    'Conoce cómo Recio Ecommerce utiliza cookies para mejorar la experiencia, mantener el sitio seguro y optimizar la navegación.',
};

const cookieCategories = [
  {
    name: 'Estrictamente necesarias',
    description:
      'Permiten que el sitio funcione correctamente, incluyendo navegación, seguridad y carrito de compras.',
  },
  {
    name: 'Analíticas',
    description:
      'Nos ayudan a entender el comportamiento de navegación y a mejorar el rendimiento del sitio.',
  },
  {
    name: 'Preferencias',
    description:
      'Guardan configuraciones como idioma, estado de sesión o ajustes de visualización.',
  },
  {
    name: 'Marketing',
    description:
      'Pueden utilizarse para medir campañas y mostrar contenido más relevante dentro de nuestra experiencia digital.',
  },
];

export default function CookiesPage() {
  return (
    <main className="w-full bg-background text-foreground">
      <section className="w-full border-b border-border bg-secondary">
        <div className="max-w-(--width-container-max) mx-auto w-full px-(--spacing-content) py-12 sm:py-16">
          <p className="font-sans text-xs tracking-[0.18em] text-neutral-600 uppercase">
            Legal Recio
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight text-foreground sm:text-6xl">
            Política de Cookies
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-sm leading-7 text-neutral-600 sm:text-base">
            En Recio Ecommerce usamos cookies para garantizar una navegación fluida, medir el
            rendimiento del sitio y mantener una experiencia premium, segura y coherente con la
            marca.
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-(--width-container-max) mx-auto w-full px-(--spacing-content) py-section">
          <div className="grid gap-12 lg:grid-cols-3">
            <div className="space-y-10 lg:col-span-2">
              <section className="space-y-4 border border-border rounded-none p-6 sm:p-8">
                <h2 className="font-display text-2xl tracking-tight text-foreground">
                  ¿Qué son las cookies?
                </h2>
                <p className="font-sans text-sm leading-7 text-neutral-600 sm:text-base">
                  Son pequeños archivos almacenados en tu dispositivo que permiten recordar
                  preferencias, mantener sesiones activas y facilitar ciertas funciones de
                  navegación. No contienen información sensible por sí mismos.
                </p>
              </section>

              <section className="space-y-4 border border-border rounded-none p-6 sm:p-8">
                <h2 className="font-display text-2xl tracking-tight text-foreground">
                  Tipos de cookies que utilizamos
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {cookieCategories.map((category) => (
                    <article key={category.name} className="border border-border rounded-none p-4">
                      <h3 className="font-sans text-sm tracking-[0.14em] text-foreground uppercase">
                        {category.name}
                      </h3>
                      <p className="mt-3 font-sans text-sm leading-6 text-neutral-600">
                        {category.description}
                      </p>
                    </article>
                  ))}
                </div>
              </section>

              <section className="space-y-4 border border-border rounded-none p-6 sm:p-8">
                <h2 className="font-display text-2xl tracking-tight text-foreground">
                  Cómo puedes gestionarlas
                </h2>
                <p className="font-sans text-sm leading-7 text-neutral-600 sm:text-base">
                  Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier
                  momento. Ten en cuenta que algunas funciones esenciales, como el carrito o el
                  inicio de sesión, podrían verse afectadas si desactivas las cookies necesarias.
                </p>

                <ul className="space-y-3 list-disc pl-5 font-sans text-sm leading-7 text-neutral-600">
                  <li>Revisa los ajustes de privacidad de tu navegador.</li>
                  <li>Elimina cookies almacenadas si deseas reiniciar tu sesión.</li>
                  <li>Bloquea cookies de terceros si buscas una navegación más restringida.</li>
                </ul>
              </section>
            </div>

            <aside className="space-y-6 border border-border bg-neutral-50 rounded-none p-6 sm:p-8">
              <h2 className="font-display text-2xl tracking-tight text-foreground">
                Transparencia y control
              </h2>
              <p className="font-sans text-sm leading-7 text-neutral-600">
                Nuestro enfoque es claro: usar cookies solo para mejorar la experiencia y para que
                el sitio funcione con precisión.
              </p>

              <div className="space-y-4 border-t border-border pt-6">
                <div>
                  <p className="font-sans text-xs tracking-[0.14em] text-neutral-400 uppercase">
                    Finalidad
                  </p>
                  <p className="mt-2 font-sans text-sm leading-6 text-neutral-600">
                    Navegación, seguridad, personalización y medición de rendimiento.
                  </p>
                </div>

                <div>
                  <p className="font-sans text-xs tracking-[0.14em] text-neutral-400 uppercase">
                    Vigencia
                  </p>
                  <p className="mt-2 font-sans text-sm leading-6 text-neutral-600">
                    Algunas cookies expiran al cerrar el navegador; otras pueden permanecer por un
                    periodo limitado para recordar tus preferencias.
                  </p>
                </div>

                <div>
                  <p className="font-sans text-xs tracking-[0.14em] text-neutral-400 uppercase">
                    Actualizaciones
                  </p>
                  <p className="mt-2 font-sans text-sm leading-6 text-neutral-600">
                    Podemos actualizar esta política cuando cambie la funcionalidad del sitio o los
                    requisitos legales aplicables.
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
