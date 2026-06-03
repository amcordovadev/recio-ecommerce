import type { Metadata } from 'next';
import { HomeContent } from '@/components/storefront/home/HomeContent';

export const metadata: Metadata = {
  title: 'Home | Recio',
  description: 'Esenciales masculinos de lujo con precisión minimalista.',
};

export default function Page() {
  return <HomeContent />;
}
