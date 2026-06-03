import type { Metadata } from 'next';
import { ProductsContent } from '@/components/storefront/products/ProductsContent';

export const metadata: Metadata = {
  title: 'Productos',
  description: 'Explora nuestra colección completa de piezas esenciales con precisión minimalista.',
};

export default function ProductosPage() {
  return <ProductsContent />;
}
