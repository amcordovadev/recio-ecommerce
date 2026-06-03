import Image from 'next/image';
import type { ProductWithRelations } from '@/mocks/products';

type ProductCardProps = {
  product: ProductWithRelations;
  priority?: boolean;
};

function formatCurrency(value: number): string {
  return new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
  }).format(value);
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const mainImage = product.images.find((image) => image.isMain);
  const fallbackImage = product.images[0];
  const imageSrc = mainImage?.url ?? fallbackImage?.url;

  const currentPrice = Number.parseFloat(product.price.toString());
  const originalPrice = product.originalPrice
    ? Number.parseFloat(product.originalPrice.toString())
    : null;

  const discountPercentage =
    product.isOnSale && originalPrice && originalPrice > currentPrice
      ? Math.round(((originalPrice - currentPrice) / originalPrice) * 100)
      : null;

  return (
    <article className="group flex flex-col bg-background rounded-none border border-border overflow-hidden">
      {/* Contenedor de Imagen con altura definida por aspect-ratio */}
      <div className="relative w-full aspect-portrait overflow-hidden bg-neutral-100">
        {imageSrc ? (
          <Image
            alt={product.name}
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={priority}
            src={imageSrc}
            unoptimized
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center font-sans text-[10px] tracking-widest text-neutral-400 uppercase">
            Sin imagen
          </div>
        )}

        {/* Badges */}
        <div className="absolute top-2 left-2 flex flex-col gap-1">
          {product.isNew && (
            <span className="bg-primary px-2 py-1 font-sans text-[10px] tracking-widest text-primary-foreground uppercase">
              Novedad
            </span>
          )}
          {discountPercentage && (
            <span className="bg-white border border-black px-2 py-1 font-sans text-[10px] tracking-widest text-black uppercase font-bold">
              -{discountPercentage}%
            </span>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="flex flex-col gap-1 p-4">
        <h3 className="font-sans text-xs uppercase tracking-wider text-neutral-900 line-clamp-1">
          {product.name}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-display text-sm font-bold text-foreground">
            {formatCurrency(currentPrice)}
          </span>
          {originalPrice && (
            <span className="font-display text-xs text-neutral-400 line-through">
              {formatCurrency(originalPrice)}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
