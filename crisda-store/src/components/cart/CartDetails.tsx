"use client";

import Image from "next/image";
import { CartItem } from "@/context/CartContext";
import { useCart } from "@/context/CartContext";

type Props = {
  item: CartItem;
};

export default function CartItemCard({ item }: Props) {
  const {
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const { product, quantity } = item;

  return (
    <article className="rounded-3xl bg-(--color-surface) p-4 md:p-5">
      <div className="flex gap-4">
        {/* IMAGE */}
        <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-white sm:h-32 sm:w-32">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="128px"
          />
        </div>

        {/* DETAILS */}
        <div className="min-w-0 flex-1">
          <div className="flex justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-wider text-(--color-muted)">
                {product.category}
              </p>

              <h2 className="mt-1 truncate text-base font-medium md:text-lg">
                {product.name}
              </h2>
            </div>

            <p className="shrink-0 font-medium">
              ₹{product.price}
            </p>
          </div>

          {/* RATING */}
          <div className="mt-2 flex items-center gap-1 text-sm">
            <span>★</span>
            <span>{product.rating}</span>
          </div>

          {/* STOCK */}
          <p className="mt-1 text-xs text-green-700">
            {product.stock > 0 ? "In stock" : "Out of stock"}
          </p>

          {/* ACTIONS */}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            {/* QUANTITY */}
            <div className="flex items-center rounded-full border border-black/10 bg-white">
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="flex h-8 w-8 items-center justify-center"
              >
                −
              </button>

              <span className="w-6 text-center text-sm">
                {quantity}
              </span>

              <button
                onClick={() => increaseQuantity(product.id)}
                className="flex h-8 w-8 items-center justify-center"
              >
                +
              </button>
            </div>

            <button
              onClick={() => removeFromCart(product.id)}
              className="text-xs text-(--color-muted) hover:text-black"
            >
              Remove
            </button>

            <button
              className="text-xs font-medium underline underline-offset-4"
            >
              Buy instantly
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}