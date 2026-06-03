export default function SuccessPage() {
  return (
    <div className="max-w-[var(--width-container-max)] mx-auto px-[var(--spacing-container)] py-[var(--spacing-section)] font-sans">
      <div className="max-w-md mx-auto text-center border border-[var(--color-border-strong)] p-12 bg-[var(--color-neutral-50)]">
        {/* Icono de éxito con color funcional */}
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-success)] text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h1 className="font-display text-3xl font-bold uppercase tracking-tighter mb-4">¡Pedido Recibido!</h1>
        <p className="text-[var(--color-neutral-600)] mb-8 text-sm">
          Tu orden ha sido procesada con éxito. Pronto recibirás un correo con los detalles de tu envío.
        </p>

        <div className="space-y-4">
          <button className="w-full bg-[var(--color-primary)] text-[var(--color-primary-foreground)] py-4 font-bold uppercase tracking-widest text-xs transition-[var(--transition-recio)] hover:opacity-[var(--opacity-hover)]">
            Seguir Comprando
          </button>
          <button className="w-full border border-[var(--color-border-strong)] py-4 font-bold uppercase tracking-widest text-xs transition-[var(--transition-recio)] hover:bg-[var(--color-neutral-100)]">
            Ver Mis Pedidos
          </button>
        </div>
      </div>
    </div>
  );
}