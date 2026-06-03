import '@/app/globals.css';
import { Navbar } from '@/components/storefront/Navbar';
import { Footer } from '@/components/storefront/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Recio | Esenciales de Lujo Minimalista',
    template: '%s | Recio',
  },
  description:
    'Colección curada de básicos masculinos de alta gama. Precisión, calidad y diseño minimalista.',
  keywords: ['moda masculina', 'lujo', 'minimalismo', 'ropa de hombre', 'recio'],
  authors: [{ name: 'Recio Team' }],
  creator: 'Recio Ecommerce',
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
