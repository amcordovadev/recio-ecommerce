'use client';

import { useState, useMemo } from 'react';
import { useCart } from '@/hooks/useCart';
import { ArrowLeft, Heart, Share2, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

export default function ProductDetails({ product }: { product: any }) {
  const [selectedColor, setSelectedColor] = useState(product.variants[0]?.color || '');
  const [selectedSize, setSelectedSize] = useState('');
  const { addToCart } = useCart();

  const displayImage = useMemo(() => {
    const variantImg = product.images.find((img: any) => img.variant_color === selectedColor);
    return variantImg?.url || product.images[0]?.url;
  }, [selectedColor, product.images]);

  const currentVariant = useMemo(() => {
    return product.variants.find((v: any) => v.color === selectedColor && v.size === selectedSize);
  }, [selectedColor, selectedSize, product.variants]);

  return (
    <div className="bg-white min-h-screen">
      {/* Botón de Regreso */}
      <nav className="max-w-7xl mx-auto px-6 py-8">
        <button
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-xs uppercase tracking-widest text-gray-400 hover:text-black transition-colors"
        >
          <ArrowLeft size={16} /> Volver al catálogo
        </button>
      </nav>

      <main className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 px-6 pb-20">
        {/* Galería de Imagen */}
        <div className="relative bg-gray-50 aspect-[3/4] overflow-hidden">
          <img
            src={displayImage}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>

        {/* Información del Producto */}
        <div className="flex flex-col justify-center max-w-md">
          <header className="mb-10">
            <h1 className="text-4xl font-light text-black uppercase tracking-tight mb-2">
              {product.name}
            </h1>
            <p className="text-2xl font-medium text-black">S/ {Number(product.price).toFixed(2)}</p>
          </header>

          <div className="space-y-10">
            {/* Selectores */}
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 block">
                Color: {selectedColor}
              </label>
              <div className="flex gap-3">
                {[...new Set(product.variants.map((v: any) => v.color))].map((color: any) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`text-[10px] border px-5 py-2 transition-all ${
                      selectedColor === color
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 text-gray-500 hover:border-black'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-gray-400 mb-4 block">
                Talla: {selectedSize || 'Seleccionar'}
              </label>
              <div className="flex gap-3">
                {[...new Set(product.variants.map((v: any) => v.size))].map((size: any) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`text-[10px] border w-12 h-12 flex items-center justify-center transition-all ${
                      selectedSize === size
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 text-gray-500 hover:border-black'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Acciones Principales */}
            <div className="space-y-4">
              <button
                onClick={() =>
                  currentVariant
                    ? addToCart({
                        ...currentVariant,
                        name: product.name,
                        price: Number(product.price),
                        image: displayImage,
                      })
                    : alert('Por favor selecciona una talla')
                }
                className="w-full bg-black text-white py-5 text-xs uppercase tracking-[0.3em] hover:bg-zinc-800 transition-colors"
              >
                Añadir a la bolsa
              </button>

              <div className="flex gap-4">
                <button className="flex-1 border border-gray-200 py-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-colors">
                  <Heart size={14} /> Favorito
                </button>
                <button className="flex-1 border border-gray-200 py-4 flex items-center justify-center gap-2 text-[10px] uppercase tracking-widest hover:bg-gray-50 transition-colors">
                  <Share2 size={14} /> Compartir
                </button>
              </div>
            </div>

            {/* Información de RECIO (Bloque de Confianza) */}
            <div className="pt-10 border-t border-gray-100 space-y-6">
              <div className="flex items-start gap-4">
                <Truck size={20} className="text-gray-400 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-medium">Envío Express</h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Entrega garantizada en Lima en un plazo de 2 a 5 días hábiles.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <RotateCcw size={20} className="text-gray-400 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-medium">
                    Cambios y Devoluciones
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Dispones de 30 días para realizar cambios en cualquier tienda física o vía web.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <ShieldCheck size={20} className="text-gray-400 mt-1" />
                <div>
                  <h4 className="text-xs uppercase tracking-widest font-medium">
                    Producto Original RECIO
                  </h4>
                  <p className="text-[11px] text-gray-500 leading-relaxed">
                    Garantía de calidad con materiales seleccionados y precisión minimalista.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer Minimalista */}
      <footer className="bg-white border-t border-gray-100 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1">
            <h3 className="text-lg font-bold tracking-tighter mb-4">RECIO</h3>
            <p className="text-[11px] text-gray-400 uppercase tracking-widest leading-loose">
              Esenciales masculinos diseñados con precisión y materiales nobles para el hombre
              contemporáneo.
            </p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Tienda</h4>
            <ul className="text-[10px] uppercase tracking-widest space-y-4 text-gray-500">
              <li className="hover:text-black cursor-pointer">Ver todo</li>
              <li className="hover:text-black cursor-pointer">Nuevos Ingresos</li>
              <li className="hover:text-black cursor-pointer">Ofertas</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Asistencia</h4>
            <ul className="text-[10px] uppercase tracking-widest space-y-4 text-gray-500">
              <li className="hover:text-black cursor-pointer">Contacto</li>
              <li className="hover:text-black cursor-pointer">Envíos y devoluciones</li>
              <li className="hover:text-black cursor-pointer">Preguntas frecuentes</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] font-bold mb-6">Legal</h4>
            <ul className="text-[10px] uppercase tracking-widest space-y-4 text-gray-500">
              <li className="hover:text-black cursor-pointer">Términos de servicio</li>
              <li className="hover:text-black cursor-pointer">Privacidad</li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-gray-50 flex justify-between items-center">
          <p className="text-[9px] uppercase tracking-[0.3em] text-gray-400">
            © 2026 RECIO. HECHO CON PRECISIÓN.
          </p>
          <div className="flex gap-6 text-[9px] uppercase tracking-[0.3em] text-gray-400">
            <span className="hover:text-black cursor-pointer">Instagram</span>
            <span className="hover:text-black cursor-pointer">Facebook</span>
            <span className="hover:text-black cursor-pointer">TikTok</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
