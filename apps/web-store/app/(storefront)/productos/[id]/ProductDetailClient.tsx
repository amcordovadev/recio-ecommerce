'use client';

import { useMemo, useState } from 'react';

import type { ProductWithRelations } from '@/mocks/products';

type Props = {
  product: ProductWithRelations;
};

function formatPrice(value: unknown) {
  if (typeof value !== 'number') return '$0.00';
  return `$${value.toFixed(2)}`;
}

const COLOR_SWATCHES: Record<string, string> = {
  negro: '#111111',
  blanco: '#f8fafc',
  'azul marino': '#1e293b',
  crema: '#f3e0c1',
  celeste: '#bfd6ea',
  grafito: '#4b5563',
  antracita: '#2d3436',
  beige: '#e5d7c5',
  oliva: '#556b2f',
  piedra: '#c0b8ac',
  musgo: '#556b2f',
  'gris humo': '#9ca3af',
  carbon: '#2d2d2d',
  'plata mate': '#c0c0c0',
};

function getSwatchColor(color: string) {
  return COLOR_SWATCHES[color.toLowerCase()] ?? '#d1d5db';
}

export default function ProductDetailClient({ product }: Props) {
  const initialColor = product.variants[0]?.color ?? null;
  const initialSize =
    product.variants.find((variant) => variant.color === initialColor)?.size ?? null;
  const [selectedColor, setSelectedColor] = useState<string | null>(initialColor);
  const [selectedSize, setSelectedSize] = useState<string | null>(initialSize);
  const [message, setMessage] = useState<string | null>(null);

  const colors = useMemo(() => {
    const uniqueColors = Array.from(new Set(product.variants.map((v) => v.color)));
    return uniqueColors;
  }, [product]);

  const sizesForColor = useMemo(() => {
    if (!selectedColor) return [];
    return Array.from(
      new Set(product.variants.filter((v) => v.color === selectedColor).map((v) => v.size)),
    );
  }, [product, selectedColor]);

  const mainImage = useMemo(() => {
    return product.images.find((i) => i.isMain) ?? product.images[0];
  }, [product]);

  function findVariant(color: string | null, size: string | null) {
    if (!color || !size) return undefined;
    return product.variants.find((v) => v.color === color && v.size === size);
  }

  function handleAddToCart() {
    const variant = findVariant(selectedColor, selectedSize);
    if (!variant) {
      setMessage('Selecciona color y talla.');
      return;
    }
    if (variant.stock <= 0) {
      setMessage('La variante seleccionada no tiene stock.');
      return;
    }

    const cartRaw = localStorage.getItem('recio_cart');
    const cart = cartRaw ? JSON.parse(cartRaw) : [];

    const item = {
      productId: product.id,
      variantId: variant.id,
      name: product.name,
      price: product.price,
      color: variant.color,
      size: variant.size,
      qty: 1,
    };

    cart.push(item);
    localStorage.setItem('recio_cart', JSON.stringify(cart));
    setMessage('Añadido al carrito');
    setTimeout(() => setMessage(null), 2500);
  }

  return (
    <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
      <div className="w-full border border-border bg-neutral-50 rounded-none aspect-[3/4] relative overflow-hidden group flex items-center justify-center">
        {mainImage ? (
          <img
            src={mainImage.url}
            alt={mainImage.altText ?? product.name}
            className="object-cover w-full h-full"
          />
        ) : (
          <div className="p-6 text-center text-neutral-400">[ Imagen del producto ]</div>
        )}
        <span className="absolute top-4 left-4 bg-primary px-3 py-1 font-display text-[10px] tracking-[0.14em] text-primary-foreground uppercase rounded-none">
          {product.isNew ? 'Nuevo' : 'Esencial'}
        </span>
      </div>

      <div className="flex flex-col">
        <span className="font-display text-xs text-neutral-400 uppercase tracking-[0.14em] block mb-2">
          REF-{String(product.id).padStart(3, '0')}
        </span>

        <h1 className="font-display text-3xl font-bold uppercase tracking-tighter text-foreground mb-4">
          {product.name}
        </h1>

        <div className="border-b border-border pb-4 mb-6">
          <p className="font-display text-2xl font-bold text-foreground">
            {formatPrice(product.price)}
          </p>
          {product.originalPrice ? (
            <p className="text-sm text-neutral-600 line-through">
              {formatPrice(product.originalPrice)}
            </p>
          ) : null}
        </div>

        <div className="mb-8">
          <p className="font-sans text-sm leading-6 text-neutral-600 max-w-xl">
            {product.description}
          </p>
        </div>

        <div className="space-y-6 border-t border-border pt-6">
          <div>
            <label className="mb-3 block font-sans text-xs tracking-[0.14em] text-foreground uppercase">
              Color
            </label>
            <div className="flex flex-wrap items-center gap-3">
              {colors.map((color) => {
                const swatchColor = getSwatchColor(color);
                const isSelected = selectedColor === color;
                return (
                  <button
                    key={color}
                    type="button"
                    onClick={() => {
                      setSelectedColor(color);
                      const firstForColor =
                        product.variants.find((variant) => variant.color === color)?.size ?? null;
                      setSelectedSize(firstForColor);
                    }}
                    className={`flex items-center gap-2 rounded-none border px-3 py-2 text-[10px] uppercase tracking-[0.14em] font-sans transition-(--transition-recio) ${
                      isSelected
                        ? 'border-border-strong bg-secondary'
                        : 'border-border bg-background hover:border-border-strong hover:bg-secondary'
                    }`}
                    aria-label={color}
                  >
                    <span
                      className="block h-4 w-4 rounded-none border"
                      style={{ backgroundColor: swatchColor }}
                      aria-hidden="true"
                    />
                    <span>{color}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="mb-3 block font-sans text-xs tracking-[0.14em] text-foreground uppercase">
              Talla
            </label>
            <div className="grid grid-cols-4 gap-2 max-w-sm">
              {sizesForColor.map((size) => {
                const variant = product.variants.find(
                  (v) => v.size === size && v.color === selectedColor,
                );
                const disabled = !variant || variant.stock <= 0;
                return (
                  <button
                    key={size}
                    type="button"
                    onClick={() => !disabled && setSelectedSize(size)}
                    className={`font-display border text-xs py-3 text-center uppercase text-foreground bg-background rounded-none transition-(--transition-recio) ${
                      selectedSize === size ? 'border-border-strong bg-secondary' : 'border-border'
                    } ${disabled ? 'opacity-40 cursor-not-allowed' : 'hover:border-border-strong hover:bg-secondary'}`}
                    disabled={disabled}
                    aria-pressed={selectedSize === size}
                  >
                    {size}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="pt-4 max-w-sm">
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={
                !selectedColor ||
                !selectedSize ||
                (findVariant(selectedColor, selectedSize)?.stock ?? 0) <= 0
              }
              className="w-full rounded-none border border-border-strong bg-primary py-4 font-sans text-sm tracking-[0.14em] text-primary-foreground uppercase transition-(--transition-recio) hover:opacity-hover disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Añadir al carrito
            </button>
            {message ? <p className="mt-3 text-sm text-neutral-600">{message}</p> : null}
          </div>
        </div>
      </div>
    </div>
  );
}
