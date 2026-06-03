// apps/web-store/components/home/HomeContent.tsx
'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/storefront/ProductCard';
import { useProducts } from '@/hooks/use-products';
import type { ProductWithRelations } from '@/mocks/products';

function ProductGridSkeleton() {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div
          key={index}
          className="overflow-hidden border border-border bg-background rounded-none"
        >
          <div className="aspect-portrait w-full bg-neutral-100 animate-pulse" />
          <div className="space-y-3 px-4 py-4">
            <div className="h-4 w-2/3 bg-neutral-100 animate-pulse" />
            <div className="h-4 w-1/3 bg-neutral-100 animate-pulse" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function HomeContent() {
  const { getProducts } = useProducts();
  const [products, setProducts] = useState<ProductWithRelations[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    getProducts()
      .then((result) => {
        if (!isMounted) return;
        setProducts(result);
      })
      .catch(() => {
        if (!isMounted) return;
        setError('No se pudo cargar el catalogo.');
      })
      .finally(() => {
        if (!isMounted) return;
        setIsLoading(false);
      });

    return () => {
      isMounted = false;
    };
  }, [getProducts]);

  const newArrivals = products.filter((product) => product.isNew);
  const saleProducts = products.filter((product) => product.isOnSale);

  return (
    <>
      <section className="w-full border-b border-border bg-secondary">
        <div className="max-w-(--width-container-max) mx-auto px-(--spacing-content) w-full py-32">
          <p className="font-sans text-s tracking-[0.16em] text-neutral-600 uppercase">Recio</p>
          <h1 className="mt-4 max-w-3xl font-display text-4xl tracking-tight text-foreground sm:text-6xl">
            Esenciales masculinos de lujo con precision y elegancia.
          </h1>
          <p className="mt-6 max-w-2xl font-sans text-base text-neutral-600">
            Descubre piezas curadas para un guardarropa contemporaneo: materiales nobles, cortes
            limpios y detalles que elevan cada look.
          </p>

          <div className="mt-8">
            <Link
              className="inline-flex items-center justify-center border border-border-strong bg-primary px-7 py-3 font-sans text-sm tracking-[0.08em] text-primary-foreground uppercase transition-(--transition-recio) hover:opacity-hover rounded-none"
              href="/productos"
            >
              Explorar catalogo
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-background">
        <div className="max-w-(--width-container-max) mx-auto px-(--spacing-content) w-full py-(--spacing-section)">
          <div className="mb-8 flex items-center justify-between gap-3">
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">Nuevos Ingresos</h2>
            <Link
              className="font-sans text-sm text-neutral-600 transition-(--transition-recio) hover:text-foreground"
              href="/productos"
            >
              Ver todo
            </Link>
          </div>

          {isLoading ? (
            <ProductGridSkeleton />
          ) : error ? (
            <p className="font-sans text-sm text-error">{error}</p>
          ) : newArrivals.length === 0 ? (
            <p className="font-sans text-sm text-neutral-600">No hay productos nuevos por ahora.</p>
          ) : (
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {newArrivals.map((product, index) => (
                <ProductCard key={product.id} product={product} priority={index < 3} />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="w-full bg-background">
        <div className="max-w-(--width-container-max) mx-auto px-(--spacing-content) w-full py-(--spacing-section)">
          <div className="mb-8 flex items-center justify-between gap-3">
            <h2 className="font-display text-2xl text-foreground sm:text-3xl">
              Ofertas Exclusivas
            </h2>
            <Link
              className="font-sans text-sm text-neutral-600 transition-(--transition-recio) hover:text-foreground"
              href="/productos"
            >
              Ver todo
            </Link>
          </div>

          {isLoading ? (
            <ProductGridSkeleton />
          ) : error ? (
            <p className="font-sans text-sm text-error">{error}</p>
          ) : saleProducts.length === 0 ? (
            <p className="font-sans text-sm text-neutral-600">
              No hay ofertas disponibles en este momento.
            </p>
          ) : (
            <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
              {saleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
