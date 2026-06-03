import Link from 'next/link';
import { Search, ShoppingBag, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="w-full sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="max-w-(--width-container-max) mx-auto px-(--spacing-content) w-full flex h-16 items-center justify-between gap-8">
        <Link href="/" className="shrink-0">
          <span className="font-display text-3xl font-bold tracking-tighter uppercase">Recio</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className="font-sans text-[11px] uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            Inicio
          </Link>
          <Link
            href="/productos"
            className="font-sans text-[11px] uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            Productos
          </Link>
          <Link
            href="/nuevos"
            className="font-sans text-[11px] uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            Nuevos
          </Link>
          <Link
            href="/ofertas"
            className="font-sans text-[11px] uppercase tracking-[0.2em] hover:opacity-50 transition-opacity"
          >
            Ofertas
          </Link>
        </div>

        <div className="flex-1 max-w-sm hidden lg:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              type="text"
              placeholder="BUSCAR PRODUCTOS..."
              className="w-full bg-secondary border border-border px-10 py-2 font-sans text-[10px] tracking-widest focus:outline-none focus:border-neutral-900 transition-colors rounded-none"
            />
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link href="/profile" className="hover:opacity-50 transition-opacity">
            <User className="w-5 h-5" />
          </Link>
          <button className="relative hover:opacity-50 transition-opacity">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-[8px] text-white w-4 h-4 flex items-center justify-center">
              0
            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
