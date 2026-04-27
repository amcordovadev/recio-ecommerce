import { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  slug: string;
  price: number;
  description: string;
  images: { url: string; variant_color: string }[];
  variants: { id: number; color: string; size: string }[];
}

const mockProducts: Product[] = [
  {
    id: 1,
    name: 'Camiseta Oversize RECIO',
    slug: 'camiseta-oversize-recio',
    price: 95.9,
    description: 'Camiseta de corte oversize, tendencia urbana contemporánea.',
    images: [
      { url: '/images/black-shirt.jpg', variant_color: 'Negro' },
      { url: '/images/beige-shirt.jpg', variant_color: 'Beige' },
      { url: '/images/white-shirt.jpg', variant_color: 'Blanco' },
    ],
    variants: [
      { id: 1, color: 'Negro', size: 'M' },
      { id: 2, color: 'Negro', size: 'L' },
      { id: 3, color: 'Negro', size: 'XL' },
      { id: 4, color: 'Beige', size: 'M' },
      { id: 5, color: 'Beige', size: 'L' },
      { id: 6, color: 'Blanco', size: 'M' },
    ],
  },
];

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    // Simular una llamada a la API
    setTimeout(() => {
      setProducts(mockProducts);
    }, 500);
  }, []);

  return { products };
}
