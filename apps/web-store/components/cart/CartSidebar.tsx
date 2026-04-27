'use client';
import { useCart } from '@/hooks/useCart';

export const CartSidebar = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="fixed right-0 top-0 w-full max-w-sm h-full bg-white shadow-2xl z-50 flex flex-col border-l border-gray-100">
      <div className="p-6 flex justify-between items-center border-b border-gray-50">
        <h2 className="text-sm uppercase tracking-[0.2em] font-medium text-black">
          Tu Bolsa ({cart.length})
        </h2>
        <button className="text-gray-400 hover:text-black text-xl">×</button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        {cart.length === 0 ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400 space-y-4">
            <p className="text-xs uppercase tracking-widest">El carrito está vacío</p>
            <button className="text-black border-b border-black text-xs uppercase tracking-widest pb-1">
              Seguir comprando
            </button>
          </div>
        ) : (
          <div className="divide-y divide-gray-50">
            {cart.map((item) => (
              <div key={item.variantId} className="py-6 flex gap-4">
                <img
                  src={item.image}
                  className="w-20 h-24 object-cover bg-gray-50"
                  alt={item.name}
                />
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xs uppercase font-medium text-black mb-1">{item.name}</h3>
                    <p className="text-[10px] text-gray-400 uppercase tracking-tighter">
                      Color: {item.color} / Talla: {item.size}
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <div className="flex border border-gray-200">
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity - 1)}
                        className="px-2 py-1 text-gray-400 hover:text-black"
                      >
                        -
                      </button>
                      <span className="px-2 py-1 text-[10px]">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.variantId, item.quantity + 1)}
                        className="px-2 py-1 text-gray-400 hover:text-black"
                      >
                        +
                      </button>
                    </div>
                    <span className="text-xs font-medium">S/ {item.price.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {cart.length > 0 && (
        <div className="p-6 bg-gray-50 space-y-4">
          <div className="flex justify-between items-center text-black">
            <span className="text-xs uppercase tracking-widest">Subtotal</span>
            <span className="text-lg font-light tracking-tighter">S/ {total.toFixed(2)}</span>
          </div>
          <p className="text-[10px] text-gray-400 text-center uppercase tracking-tighter">
            Impuestos y envío calculados en el checkout
          </p>
          <button className="w-full bg-black text-white py-4 text-xs uppercase tracking-[0.2em] hover:bg-zinc-800 transition-all">
            Finalizar Compra
          </button>
        </div>
      )}
    </div>
  );
};
