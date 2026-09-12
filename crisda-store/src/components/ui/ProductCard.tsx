"use client";

import { ProductCard } from "@/types/products.type";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function ProductCard({
  product,
}: {
  product: ProductCard;
}) {
  const {
    addToCart,
    increaseQuantity,
    decreaseQuantity,
    getQuantity,
  } = useCart();

  const [showAdded, setShowAdded] = useState(false);

  const quantity = getQuantity(product.id);

  const handleAdd = () => {
    addToCart(product);

    setShowAdded(true);

    setTimeout(() => {
      setShowAdded(false);
    }, 1000);
  };

  return (
    <div className="group">
      <div
        className="
          relative
          aspect-square
          overflow-hidden
          rounded-xl
          bg-(--color-surface)
        "
      >
        <Link href={`/products/${product.id}`}>
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="
              object-cover
              transition
              duration-500
              group-hover:scale-105
            "
            sizes="
              (max-width: 640px) 50vw,
              (max-width: 1024px) 33vw,
              25vw
            "
          />
        </Link>

        {/* Cart control */}
        <div className="absolute bottom-3 right-3 z-10">
          {quantity === 0 ? (
            <button
              onClick={handleAdd}
              className="
                rounded-full
                bg-white/95
                px-4
                py-2.5
                text-sm
                font-medium
                shadow-md
                backdrop-blur-sm
                transition
                hover:bg-white
                active:scale-95
              "
            >
              {showAdded ? "Added ✓" : "Add +"}
            </button>
          ) : (
            <div
              className="
                flex
                items-center
                gap-3
                rounded-full
                bg-white/95
                px-3
                py-2
                text-sm
                font-medium
                shadow-md
                backdrop-blur-sm
              "
            >
              <button
                onClick={() => decreaseQuantity(product.id)}
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  hover:bg-black/5
                "
                aria-label="Decrease quantity"
              >
                −
              </button>

              <span className="min-w-4 text-center">
                {quantity}
              </span>

              <button
                onClick={() => increaseQuantity(product.id)}
                className="
                  flex
                  h-7
                  w-7
                  items-center
                  justify-center
                  rounded-full
                  hover:bg-black/5
                "
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="mt-4">
        <p className="text-xs uppercase tracking-[0.15em] text-(--color-muted)">
          {product.category}
        </p>

        <h3 className="mt-2 text-xl">
          {product.name}
        </h3>

        <p className="mt-2 text-sm text-(--color-muted)">
          ${product.price}
        </p>
      </div>
    </div>
  );
}