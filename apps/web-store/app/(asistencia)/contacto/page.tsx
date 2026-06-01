import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Contacto directo con Recio Ecommerce para asistencia personalizada, seguimiento de pedidos y experiencia premium.',
};

export default function Page() {
  return (
    <main className="w-full bg-background text-foreground">
      <section className="w-full border-b border-border bg-secondary py-12">
        <div className="max-w-(--width-container-max) mx-auto px-(--spacing-content)">
          <h1 className="font-display text-4xl font-bold uppercase tracking-tighter">
            Contacto directo para una experiencia impecable
          </h1>
          <p className="mt-2 font-sans text-xs text-neutral-500 uppercase tracking-widest">
            Nuestro equipo acompaña cada consulta con precisión, discreción y rapidez.
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-(--width-container-max) mx-auto w-full px-(--spacing-content) py-section">
          <div className="grid gap-12 lg:grid-cols-2">
            <div className="border border-border bg-background p-6 rounded-none sm:p-8">
              <h2 className="font-display text-2xl tracking-tight text-foreground">Escríbenos</h2>
              <p className="mt-3 max-w-xl font-sans text-sm leading-6 text-neutral-600">
                Completa el formulario y responderemos con una atención precisa, clara y alineada
                con el estándar Recio.
              </p>

              <form className="mt-8 space-y-5">
                <div>
                  <label
                    className="mb-2 block font-sans text-xs tracking-[0.14em] text-foreground uppercase"
                    htmlFor="name"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Tu nombre"
                    className="w-full rounded-none border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-neutral-400 outline-none transition-(--transition-recio) focus:border-border-strong focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block font-sans text-xs tracking-[0.14em] text-foreground uppercase"
                    htmlFor="email"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@correo.com"
                    className="w-full rounded-none border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-neutral-400 outline-none transition-(--transition-recio) focus:border-border-strong focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block font-sans text-xs tracking-[0.14em] text-foreground uppercase"
                    htmlFor="orderNumber"
                  >
                    Número de pedido{' '}
                    <span className="text-neutral-400 normal-case">(opcional)</span>
                  </label>
                  <input
                    id="orderNumber"
                    name="orderNumber"
                    type="text"
                    placeholder="REC-000000"
                    className="w-full rounded-none border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-neutral-400 outline-none transition-(--transition-recio) focus:border-border-strong focus:ring-0"
                  />
                </div>

                <div>
                  <label
                    className="mb-2 block font-sans text-xs tracking-[0.14em] text-foreground uppercase"
                    htmlFor="message"
                  >
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    placeholder="Cuéntanos cómo podemos asistirte"
                    className="w-full rounded-none border border-border bg-background px-4 py-3 font-sans text-sm text-foreground placeholder:text-neutral-400 outline-none transition-(--transition-recio) focus:border-border-strong focus:ring-0"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-none border border-border-strong bg-primary px-5 py-3 font-sans text-sm tracking-[0.14em] text-primary-foreground uppercase transition-(--transition-recio) hover:opacity-hover"
                >
                  Enviar consulta
                </button>
              </form>
            </div>

            <aside className="border border-border bg-neutral-50 p-6 rounded-none sm:p-8">
              <h2 className="font-display text-2xl tracking-tight text-foreground">
                Asistencia directa
              </h2>
              <p className="mt-3 max-w-xl font-sans text-sm leading-6 text-neutral-600">
                Para consultas urgentes, cambios de talla o seguimiento de envíos, también puedes
                contactarnos por nuestros canales directos.
              </p>

              <div className="mt-8 space-y-6">
                <div>
                  <p className="font-sans text-xs tracking-[0.14em] text-neutral-400 uppercase">
                    Soporte email
                  </p>
                  <p className="mt-2 font-display font-bold text-foreground">soporte@recio.com</p>
                </div>

                <div>
                  <p className="font-sans text-xs tracking-[0.14em] text-neutral-400 uppercase">
                    Horario de atención
                  </p>
                  <p className="mt-2 font-sans text-sm leading-6 text-neutral-600">
                    Lunes a viernes, 9:00 a. m. - 7:00 p. m.
                    <br />
                    Sábados, 10:00 a. m. - 2:00 p. m.
                  </p>
                </div>

                <div>
                  <p className="font-sans text-xs tracking-[0.14em] text-neutral-400 uppercase">
                    Showroom
                  </p>
                  <p className="mt-2 font-sans text-sm leading-6 text-neutral-600">
                    Av. Javier Prado 1200, San Isidro, Lima.
                    <br />
                    Atención presencial con cita previa.
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
