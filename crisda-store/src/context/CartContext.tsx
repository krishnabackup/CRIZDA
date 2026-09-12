"use client";

import { ProductType } from "@/types/products.type";
import {
  createContext,
  useContext,
  useState,
  ReactNode,
} from "react";


type CartItem = {
  product: ProductType;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];

  addToCart: (product: ProductType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;

  getQuantity: (id: number) => number;
  getCartCount: () => number;
  getCartTotal: () => number;
  removeFromCart: (id : number) => void
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  // ADD PRODUCT
  const addToCart = (product: ProductType) => {
    setCartItems((items) => {
      const existingItem = items.find(
        (item) => item.product.id === product.id
      );

      // Already exists
      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id
            ? {
                ...item,
                quantity: Math.min(
                  item.quantity + 1,
                  product.stock
                ),
              }
            : item
        );
      }

      // New product
      return [
        ...items,
        {
          product,
          quantity: 1,
        },
      ];
    });
  };

  // +
  const increaseQuantity = (id: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.product.id === id
          ? {
              ...item,
              quantity: Math.min(
                item.quantity + 1,
                item.product.stock
              ),
            }
          : item
      )
    );
  };

  // -
  const decreaseQuantity = (id: number) => {
    setCartItems((items) =>
      items
        .map((item) =>
          item.product.id === id
            ? {
                ...item,
                quantity: Math.max(item.quantity - 1, 0),
              }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Get quantity of one product
  const getQuantity = (id: number) => {
    return (
      cartItems.find((item) => item.product.id === id)?.quantity ?? 0
    );
  };

  // Total number of products
  const getCartCount = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  };

  // Total price
  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.product.price * item.quantity,
      0
    );
    }
    const removeFromCart = (id : number) => {
       setCartItems((items) =>
    items.filter((item) => item.product.id !== id)
  );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        getQuantity,
        getCartCount,
        getCartTotal,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }
  return context;
}