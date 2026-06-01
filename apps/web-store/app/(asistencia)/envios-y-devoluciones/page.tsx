import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Envíos y Devoluciones',
  description:
    'Información clara sobre envíos, tiempos de entrega y devoluciones para clientes Recio Ecommerce.',
};

const shippingMethods = [
  ['Recojo en showroom', 'Lima - San Isidro', 'Mismo día', 'Sin costo'],
  ['Entrega Lima Metropolitana', 'Distritos seleccionados', '24 a 48 horas', 'Desde S/ 18'],
  ['Envío nacional', 'Principales ciudades del Perú', '2 a 5 días hábiles', 'Desde S/ 25'],
];

export default function Page() {
  return (
    <main className="w-full bg-background text-foreground">
      <section className="w-full border-b border-border bg-secondary py-12">
        <div className="max-w-(--width-container-max) mx-auto px-(--spacing-content)">
          <h1 className="font-display text-4xl font-bold uppercase tracking-tighter">
            Envíos y devoluciones con claridad
          </h1>
          <p className="mt-2 font-sans text-xs text-neutral-500 uppercase tracking-widest">
            Diseñamos cada entrega con precisión y cada devolución con un proceso simple, elegante y
            transparente.
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-(--width-container-max) mx-auto w-full px-(--spacing-content) py-section">
          <section className="space-y-8 border border-border bg-background p-6 rounded-none sm:p-8">
            <div>
              <h2 className="font-display text-2xl tracking-tight text-foreground">
                Métodos de envío
              </h2>
              <p className="mt-3 max-w-xl font-sans text-sm leading-6 text-neutral-600">
                Todas las entregas están pensadas para el mercado peruano, priorizando rapidez,
                cobertura local y una experiencia acorde al estándar Recio.
              </p>
            </div>

            <div className="overflow-hidden border border-border rounded-none">
              <div className="overflow-x-auto">
                <table className="min-w-176 w-full border-collapse text-left">
                  <thead className="bg-neutral-50">
                    <tr>
                      {['Tipo', 'Zona', 'Tiempo estimado', 'Costo'].map((heading) => (
                        <th
                          key={heading}
                          className="border-b border-border px-4 py-3 font-sans text-xs tracking-[0.14em] text-foreground uppercase"
                        >
                          {heading}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {shippingMethods.map((row) => (
                      <tr key={row[0]} className="align-top">
                        {row.map((cell, index) => (
                          <td
                            key={cell}
                            className="border-b border-border px-4 py-4 font-sans text-sm text-neutral-600 last:border-b-0"
                          >
                            {index === 0 ? <span className="text-foreground">{cell}</span> : cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="mt-12 space-y-8 border border-border bg-neutral-50 p-6 rounded-none sm:p-8">
            <h2 className="font-display text-2xl tracking-tight text-foreground">
              Protocolo de devoluciones
            </h2>
            <p className="mt-3 max-w-xl font-sans text-sm leading-6 text-neutral-600">
              Queremos que el proceso sea directo y sin fricción. Sigue estos pasos para iniciar una
              devolución o cambio dentro del territorio peruano.
            </p>

            <ol className="mt-8 space-y-4 list-decimal pl-5 font-sans text-sm leading-7 text-neutral-600">
              <li>
                Escríbenos a <span className="text-foreground">devoluciones@recio.com</span> dentro
                de los 7 días posteriores a la entrega.
              </li>
              <li>
                Incluye tu número de pedido, nombre completo y una breve descripción del motivo.
              </li>
              <li>
                Conserva la pieza en su empaque original, sin uso, con etiquetas y accesorios
                completos.
              </li>
              <li>
                Nuestro equipo validará la solicitud y compartirá instrucciones de recojo o despacho
                según tu ubicación.
              </li>
              <li>
                Una vez recibida y aprobada la prenda, procesaremos el cambio o reembolso según
                corresponda.
              </li>
            </ol>

            <div className="mt-8 border-t border-border pt-6">
              <p className="font-sans text-xs tracking-[0.14em] text-neutral-400 uppercase">
                Consideraciones
              </p>
              <ul className="mt-4 space-y-3 list-disc pl-5 font-sans text-sm leading-6 text-neutral-600">
                <li>Las piezas personalizadas no aplican a devolución.</li>
                <li>Los reembolsos se emiten al mismo método de pago original.</li>
                <li>Los tiempos pueden variar según la zona de destino dentro de Perú.</li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
