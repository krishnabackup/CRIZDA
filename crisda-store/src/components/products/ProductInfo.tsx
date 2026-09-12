"use client";

import { useState } from "react";
import { ProductType } from "@/types/products.type";
import { useCart } from "@/context/CartContext";

export default function ProductInfo({
  product,
}: {
  product: ProductType;
}) {
  const [showDetails, setShowDetails] = useState(false);

  const { addToCart, getQuantity } = useCart();

  const quantity = getQuantity(product.id);

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="w-full rounded-3xl bg-[#E9DCC9] p-5 sm:p-6 md:p-8 lg:p-10">

      {/* CATEGORY */}
      <p className="text-xs font-medium uppercase tracking-[0.18em] text-gray-500">
        {product.category}
      </p>

      {/* PRODUCT NAME */}
      <h1 className="mt-2 text-2xl font-semibold tracking-tight text-gray-900 sm:text-3xl md:text-4xl">
        {product.name}
      </h1>

      {/* RATING */}
      <div className="mt-3 flex items-center gap-2">
        <div className="flex gap-0.5 text-sm text-yellow-500">
          {"★".repeat(Math.round(product.rating))}
        </div>

        <span className="text-sm text-gray-500">
          {product.rating} / 5
        </span>

        <span className="text-sm text-gray-400">
          ({product.reviewCount} reviews)
        </span>
      </div>

      {/* PRICE */}
      <div className="mt-5 flex items-baseline gap-2">
        <span className="text-3xl font-semibold text-gray-900 sm:text-4xl">
          ₹{product.price}
        </span>

        <span className="text-xs text-gray-500 sm:text-sm">
          Inclusive of all taxes
        </span>
      </div>

      {/* SHORT DESCRIPTION - MOBILE */}
      <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600 md:hidden">
        {product.description}
      </p>

      {/* =================================
          DESKTOP DETAILS
      ================================= */}

      <div className="hidden md:block">
        <ProductDetails product={product} />
      </div>

      {/* =================================
          MOBILE MORE DETAILS
      ================================= */}

      <div className="mt-6 border-t border-black/10 pt-5 md:hidden">

        <button
          type="button"
          onClick={() => setShowDetails((prev) => !prev)}
          className="flex w-full items-center justify-between text-sm font-medium text-gray-800"
        >
          <span>
            {showDetails ? "Hide details" : "More details"}
          </span>

          <span
            className={`text-lg transition-transform duration-300 ${
              showDetails ? "rotate-180" : ""
            }`}
          >
            ↓
          </span>
        </button>

        <div
          className={`grid transition-all duration-300 ease-out ${
            showDetails
              ? "mt-5 grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <ProductDetails product={product} />
          </div>
        </div>

      </div>

      {/* =================================
          ADD TO CART
      ================================= */}

      <div className="mt-7 flex gap-3">

        <button
          type="button"
          onClick={handleAddToCart}
          disabled={quantity >= product.stock}
          className="
            flex-1
            rounded-full
            bg-gray-900
            px-5
            py-3.5
            text-sm
            font-medium
            text-white
            transition
            hover:bg-gray-800
            disabled:cursor-not-allowed
            disabled:opacity-50
            sm:px-6
            sm:py-4
          "
        >
          {quantity >= product.stock
            ? "Out of Stock"
            : quantity > 0
              ? `Add another · ${quantity} in cart`
              : "Add to Cart"}
        </button>

        {/* WISHLIST */}
        <button
          type="button"
          aria-label="Add to wishlist"
          className="
            flex
            h-12
            w-12
            shrink-0
            items-center
            justify-center
            rounded-full
            border
            border-black/10
            bg-white
            text-lg
            transition
            hover:bg-gray-50
            sm:h-14
            sm:w-14
          "
        >
          ♡
        </button>

      </div>
    </div>
  );
}


/* =================================
   PRODUCT DETAILS
================================= */

function ProductDetails({
  product,
}: {
  product: ProductType;
}) {
  return (
    <div>

      {/* DESCRIPTION */}
      <div className="border-t border-black/10 pt-5 md:mt-7 md:pt-6">

        <h2 className="text-xs font-semibold uppercase tracking-wider text-gray-700">
          About this piece
        </h2>

        <p className="mt-3 text-sm leading-7 text-gray-600">
          {product.description}
        </p>

      </div>


      {/* COLORS */}
      <div className="mt-6">

        <h2 className="text-sm font-semibold text-gray-800">
          Available colors
        </h2>

        <div className="mt-3 flex flex-wrap gap-2">

          {product.colors.map((color) => (
            <button
              key={color}
              type="button"
              className="
                rounded-full
                border
                border-black/10
                bg-white
                px-4
                py-2
                text-sm
                text-gray-700
                transition
                hover:border-black
              "
            >
              {color}
            </button>
          ))}

        </div>

      </div>


      {/* VENDOR */}
      <div className="mt-6 rounded-2xl bg-white/70 p-4">

        <p className="text-xs uppercase tracking-wider text-gray-400">
          Crafted by
        </p>

        <p className="mt-1 font-medium text-gray-800">
          {product.vendor}
        </p>

        <p className="mt-1 text-sm leading-5 text-gray-500">
          Curated aesthetic objects for everyday spaces.
        </p>

      </div>


      {/* STOCK + DELIVERY */}
      <div className="mt-4 grid grid-cols-2 gap-3">

        {/* STOCK */}
        <div className="rounded-2xl bg-white/70 p-4">

          <p className="text-xs text-gray-400">
            Availability
          </p>

          <p
            className={`mt-1 text-sm font-medium ${
              product.stock > 0
                ? "text-green-700"
                : "text-red-600"
            }`}
          >
            {product.stock > 0
              ? `In Stock · ${product.stock} left`
              : "Out of Stock"}
          </p>

        </div>


        {/* DELIVERY */}
        <div className="rounded-2xl bg-white/70 p-4">

          <p className="text-xs text-gray-400">
            Delivery
          </p>

          <p className="mt-1 text-sm font-medium text-gray-800">
            {product.deliveryDays}
          </p>

        </div>

      </div>

    </div>
  );
}
