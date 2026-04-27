import { create } from 'zustand';
import { persist } from 'zustand/middleware';

// Define la forma de un item según la base de datos
interface CartItem {
  variantId: number; // Viene de product_variants.id
  productId: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
  size: string;
  color: string;
}

interface CartStore {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (variantId: number) => void;
  updateQuantity: (variantId: number, qty: number) => void;
}

export const useCart = create<CartStore>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (item) =>
        set((state) => {
          const existing = state.cart.find((i) => i.variantId === item.variantId);
          if (existing) {
            return {
              cart: state.cart.map((i) =>
                i.variantId === item.variantId ? { ...i, quantity: i.quantity + 1 } : i,
              ),
            };
          }
          return { cart: [...state.cart, item] };
        }),
      updateQuantity: (id, qty) =>
        set((state) => ({
          cart: state.cart.map((i) =>
            i.variantId === id ? { ...i, quantity: Math.max(1, qty) } : i,
          ),
        })),
      removeFromCart: (id) =>
        set((state) => ({
          cart: state.cart.filter((i) => i.variantId !== id),
        })),
    }),
    { name: 'recio-cart-storage' }, // Esto guarda en localStorage automáticamente
  ),
);
