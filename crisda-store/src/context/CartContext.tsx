"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import { ProductType } from "@/types/products.type";

export type CartItem = {
  product: ProductType;
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];

  addToCart: (product: ProductType) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;

  getQuantity: (id: number) => number;
  getCartCount: () => number;
  getCartTotal: () => number;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CART_STORAGE_KEY = "crisda-cart";

export function CartProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // =========================================================
  // LOAD CART FROM LOCAL STORAGE
  // =========================================================

  useEffect(() => {
    try {
      const storedCart =
        localStorage.getItem(CART_STORAGE_KEY);

      if (storedCart) {
        const parsedCart: CartItem[] =
          JSON.parse(storedCart);

        setCartItems(parsedCart);
      }
    } catch (error) {
      console.error(
        "Failed to load cart:",
        error
      );
    } finally {
      setIsLoaded(true);
    }
  }, []);

  // =========================================================
  // SAVE CART TO LOCAL STORAGE
  // =========================================================

  useEffect(() => {
    if (!isLoaded) return;

    try {
      localStorage.setItem(
        CART_STORAGE_KEY,
        JSON.stringify(cartItems)
      );
    } catch (error) {
      console.error(
        "Failed to save cart:",
        error
      );
    }
  }, [cartItems, isLoaded]);

  // =========================================================
  // ADD TO CART
  // =========================================================

  const addToCart = (product: ProductType) => {
    setCartItems((items) => {
      const existingItem = items.find(
        (item) =>
          item.product.id === product.id
      );

      // Product already exists
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

  // =========================================================
  // INCREASE QUANTITY
  // =========================================================

  const increaseQuantity = (id: number) => {
    setCartItems((items) =>
      items.map((item) => {
        if (item.product.id !== id) {
          return item;
        }

        const newQuantity = Math.min(
          item.quantity + 1,
          item.product.stock
        );

        return {
          ...item,
          quantity: newQuantity,
        };
      })
    );
  };

  // =========================================================
  // DECREASE QUANTITY
  // =========================================================

  const decreaseQuantity = (id: number) => {
    setCartItems((items) =>
      items
        .map((item) => {
          if (item.product.id !== id) {
            return item;
          }

          return {
            ...item,
            quantity: Math.max(
              item.quantity - 1,
              0
            ),
          };
        })
        .filter(
          (item) => item.quantity > 0
        )
    );
  };

  // =========================================================
  // REMOVE FROM CART
  // =========================================================

  const removeFromCart = (id: number) => {
    setCartItems((items) =>
      items.filter(
        (item) =>
          item.product.id !== id
      )
    );
  };

  // =========================================================
  // GET QUANTITY
  // =========================================================

  const getQuantity = (id: number) => {
    return (
      cartItems.find(
        (item) =>
          item.product.id === id
      )?.quantity ?? 0
    );
  };

  // =========================================================
  // GET CART COUNT
  // =========================================================

  const getCartCount = () => {
    return cartItems.reduce(
      (total, item) =>
        total + item.quantity,
      0
    );
  };

  // =========================================================
  // GET CART TOTAL
  // =========================================================

  const getCartTotal = () => {
    return cartItems.reduce(
      (total, item) =>
        total +
        item.product.price *
          item.quantity,
      0
    );
  };

  // =========================================================
  // PROVIDER
  // =========================================================

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        getQuantity,
        getCartCount,
        getCartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ===========================================================
// CUSTOM HOOK
// ===========================================================

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}