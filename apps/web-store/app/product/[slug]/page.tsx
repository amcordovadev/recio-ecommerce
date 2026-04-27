import { PrismaClient } from '@repo/database';
import ProductDetails from './ProductDetails';
import { notFound } from 'next/navigation';

// Crear cliente Prisma con la URL de la variable de entorno
const prisma = new PrismaClient({
  datasources: {
    db: {
      //url: process.env.DATABASE_URL,
      url: 'postgresql://postgres:Backend%402025@localhost:5432/recio_db?schema=public', // Asegura que la URL se tome de la variable de entorno en tiempo de ejecución
    },
  },
});

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  // Awaitear los parámetros de ruta
  const { slug } = await params;

  // Validación defensiva
  if (!slug || typeof slug !== 'string') {
    notFound();
  }

  // Consultamos la DB usando el slug de la URL
  const product = await prisma.product.findUnique({
    where: { slug },
    include: {
      variants: true,
      images: true,
    },
  });

  // Si el slug no existe en la DB, lanzamos un 404 de Next.js
  if (!product) {
    notFound();
  }

  const serializedProduct = JSON.parse(JSON.stringify(product));

  //return <ProductDetails product={product} />;
  return <ProductDetails product={serializedProduct} />;
}
