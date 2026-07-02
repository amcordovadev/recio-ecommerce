// apps/web-store/components/storefront/products/ProductsContent.tsx
'use client';

import { useState, useEffect } from 'react';
import { ProductCard } from '@/components/storefront/ProductCard';
import { useProducts } from '@/hooks/use-products';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { ProductCardDto } from '@/types'; // Importamos tu nuevo contrato oficial

export function ProductsContent() {
  // El estado ahora está blindado usando únicamente el DTO oficial del catálogo
  const [products, setProducts] = useState<ProductCardDto[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const { getProducts } = useProducts();

  useEffect(() => {
    getProducts().then((data) => {
      // Adaptador: Transformamos los datos del mock viejo al nuevo DTO plano
      const adaptedProducts: ProductCardDto[] = (data as any[]).map((p) => {
        const mainImage = p.images?.find((img: any) => img.url);
        const fallbackImage = p.images?.[0];

        return {
          id: p.id,
          name: p.name,
          slug: p.slug,
          price: Number(p.price),
          originalPrice: p.originalPrice ? Number(p.originalPrice) : null,
          imageUrl: mainImage?.url ?? fallbackImage?.url ?? p.imageUrl ?? null,
          isNew: !!p.isNew,
          isOnSale: !!p.isOnSale,
          categoryName: p.category?.name ?? 'Ropa',
        };
      });

      setProducts(adaptedProducts);
      setIsLoading(false);
    });
  }, [getProducts]);

  return (
    <>
      {/* ENCABEZADO DE CATEGORÍA */}
      <header className="w-full border-b border-border bg-secondary py-12">
        <div className="max-w-(--width-container-max) mx-auto px-(--spacing-content)">
          <h1 className="font-display text-4xl font-bold uppercase tracking-tighter">
            Colección Completa
          </h1>
          <p className="mt-2 font-sans text-xs text-neutral-500 uppercase tracking-widest">
            {products.length} Piezas encontradas
          </p>
        </div>
      </header>

      {/* BARRA DE FILTROS RÁPIDOS */}
      <div className="w-full border-b border-border bg-white sticky top-16 z-40">
        <div className="max-w-(--width-container-max) mx-auto px-(--spacing-content) h-14 flex items-center justify-between">
          <button className="flex items-center gap-2 font-sans text-[10px] uppercase tracking-[0.2em] hover:opacity-50 transition-opacity">
            <SlidersHorizontal className="w-4 h-4" />
            Filtrar
          </button>

          <div className="flex gap-8">
            <button className="flex items-center gap-1 font-sans text-[10px] uppercase tracking-[0.2em] hover:opacity-50">
              Ordenar por <ChevronDown className="w-3 h-3" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-(--width-container-max) mx-auto px-(--spacing-content) py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* SIDEBAR DE FILTROS (Desktop) */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="space-y-10">
              <div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  Categorías
                </h3>
                <ul className="space-y-3">
                  {['Todos', 'Camisetas', 'Pantalones', 'Accesorios'].map((cat) => (
                    <li key={cat}>
                      <button className="font-sans text-[11px] uppercase tracking-widest text-neutral-500 hover:text-foreground">
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  Tallas
                </h3>
                <div className="grid grid-cols-4 gap-2">
                  {['S', 'M', 'L', 'XL'].map((size) => (
                    <button
                      key={size}
                      className="border border-border py-2 font-sans text-[11px] hover:border-black transition-colors"
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-display text-xs font-bold uppercase tracking-[0.2em] mb-6">
                  Precio
                </h3>
                <div className="space-y-2">
                  <input type="range" className="w-full accent-black" />
                  <div className="flex justify-between font-display text-[11px] text-neutral-500">
                    <span>S/ 0</span>
                    <span>S/ 1000</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* GRID DE PRODUCTOS */}
          <section className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-12">
              {isLoading
                ? Array(6)
                    .fill(0)
                    .map((_, i) => (
                      <div key={i} className="aspect-portrait bg-neutral-100 animate-pulse" />
                    ))
                : products.map((product, index) => (
                    <ProductCard key={product.id} product={product} priority={index < 3} />
                  ))}
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
