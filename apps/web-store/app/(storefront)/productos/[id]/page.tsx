import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { MOCK_PRODUCTS, type ProductWithRelations } from '@/mocks/products';
import ProductDetailClient from './ProductDetailClient';

export const metadata: Metadata = {
  title: 'Detalle de producto - Recio',
  description: 'Detalle del producto seleccionado',
};

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params;
  const productId = Number(id);

  const product = MOCK_PRODUCTS.find((p) => p.id === productId) as ProductWithRelations | undefined;

  if (!product) {
    notFound();
  }

  return (
    <main className="w-full bg-background text-foreground">
      <section className="w-full">
        <div className="max-w-(--width-container-max) mx-auto w-full px-(--spacing-content) py-section">
          <ProductDetailClient product={product!} />
        </div>
      </section>
    </main>
  );
}
