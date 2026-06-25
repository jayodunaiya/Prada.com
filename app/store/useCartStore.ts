// app/store/useCartStore.ts

import { persist } from "zustand/middleware";

// app/store/useCartStore.ts
import { create } from 'zustand';

export interface CartItem {
  id: number;
  name: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  cartItems: CartItem[];
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  getSubtotal: () => number;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cartItems: [
        {
          id: 1,
          name: "Women Rose Gown ",
          color: "Forest Green",
          price: 38000, // Fixed: Using actual price instead of placeholder 3200
          quantity: 1,
          image:
            "https://i.pinimg.com/webp/1200x/5d/c7/b7/5dc7b71521510222b2e53fb9218cef21.webp",
        },
        {
          id: 2,
          name: "Elegant women dress",
          color: "White Leather",
          price: 50000, // Fixed: Using actual price instead of placeholder 3200
          quantity: 1,
          image:
            "https://i.pinimg.com/736x/11/18/e2/1118e26685adb28b6f136b105e23123a.jpg",
        },
        
      ],
      increaseQuantity: (id) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
          ),
        })),
      decreaseQuantity: (id) =>
        set((state) => ({
          cartItems: state.cartItems.map((item) =>
            item.id === id
              ? { ...item, quantity: Math.max(1, item.quantity - 1) }
              : item,
          ),
        })),
      removeItem: (id) =>
        set((state) => ({
          cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
      clearCart: () => set({ cartItems: [] }),
      getSubtotal: () => {
        return get().cartItems.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        );
      },
    }),
    {
      name: "jay-fabrics-cart-storage", // Key used in localStorage
    },
  ),
);
