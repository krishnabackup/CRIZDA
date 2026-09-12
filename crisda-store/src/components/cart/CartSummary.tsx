"use client";

import { useCart } from "@/context/CartContext";

export default function CartSummary() {
  const { getCartTotal } = useCart();

  const subtotal = getCartTotal();

  // Temporary example
  const discount = 450;

  const total = subtotal - discount;

  return (
    <aside className="rounded-3xl bg-(--color-surface) p-6 md:p-8 lg:sticky lg:top-24">
      <h2 className="text-lg font-medium">
        Order summary
      </h2>

      {/* PRICE */}
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-(--color-muted)">
            Subtotal
          </span>

          <span>₹{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span className="text-(--color-muted)">
            Discount
          </span>

          <span className="text-green-700">
            − ₹{discount}
          </span>
        </div>
      </div>

      <div className="my-5 h-px bg-black/10" />

      {/* TOTAL */}
      <div className="flex items-center justify-between">
        <span className="font-medium">
          Total
        </span>

        <span className="text-xl font-medium">
          ₹{total}
        </span>
      </div>

      {/* SAVINGS */}
      {discount > 0 && (
        <div className="mt-5 rounded-2xl bg-white px-4 py-3 text-center text-sm">
          You saved{" "}
          <span className="font-medium text-green-700">
            ₹{discount}
          </span>{" "}
          on this order
        </div>
      )}

      {/* CHECKOUT */}
      <button className="mt-5 w-full rounded-full bg-black px-5 py-3.5 text-sm font-medium text-white transition hover:opacity-90">
        Proceed to checkout
      </button>

      {/* DISCOUNTS */}
      <div className="mt-8">
        <h3 className="text-sm font-medium">
          Discounts you can use
        </h3>

        <div className="mt-3 space-y-2">
          <button className="w-full rounded-2xl border border-black/10 bg-white p-3 text-left">
            <p className="text-sm font-medium">
              SAVE10
            </p>

            <p className="mt-1 text-xs text-(--color-muted)">
              Get 10% off your order
            </p>
          </button>

          <button className="w-full rounded-2xl border border-black/10 bg-white p-3 text-left">
            <p className="text-sm font-medium">
              NEWUSER
            </p>

            <p className="mt-1 text-xs text-(--color-muted)">
              Get ₹200 off
            </p>
          </button>
        </div>
      </div>
    </aside>
  );
}