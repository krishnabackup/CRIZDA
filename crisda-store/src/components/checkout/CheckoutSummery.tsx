"use client";

import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function CheckoutSummary() {
  const {
    cartItems,
    getCartTotal,
  } = useCart();
const router = useRouter();
  const subtotal = getCartTotal();

  const discount = 300;

  const delivery = 0;

  const total = subtotal - discount + delivery;
  const handleSubmit = () => {
    toast.success("Order Places" , {
  style: {
    background: "#10b981",
    color: "white",
    border: "1px solid #10b981",
  }},)
    router.push("/products")
  }
  return (
    <aside className="rounded-3xl bg-(--color-surface) p-6 md:p-8 lg:sticky lg:top-24">

      <h2 className="text-lg font-medium">
        Your order
      </h2>

      {/* ITEMS */}
      <div className="mt-6 space-y-4">

        {cartItems.map((item) => (
          <div
            key={item.product.id}
            className="flex items-center justify-between gap-4"
          >
            <div className="min-w-0">
              <p className="truncate text-sm">
                {item.product.name}
              </p>

              <p className="mt-1 text-xs text-(--color-muted)">
                Qty {item.quantity}
              </p>
            </div>

            <p className="shrink-0 text-sm">
              ₹{item.product.price * item.quantity}
            </p>
          </div>
        ))}

      </div>

      <div className="my-6 h-px bg-black/10" />

      {/* PRICE */}
      <div className="space-y-3 text-sm">

        <div className="flex justify-between">
          <span className="text-(--color-muted)">
            Subtotal
          </span>

          <span>
            ₹{subtotal}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-(--color-muted)">
            Discount
          </span>

          <span className="text-green-700">
            − ₹{discount}
          </span>
        </div>

        <div className="flex justify-between">
          <span className="text-(--color-muted)">
            Delivery
          </span>

          <span>
            {delivery === 0 ? "Free" : `₹${delivery}`}
          </span>
        </div>

      </div>

      <div className="my-6 h-px bg-black/10" />

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
          </span>
        </div>
      )}

      <button className="mt-5 w-full rounded-full bg-black px-5 py-4 text-sm font-medium text-white transition hover:opacity-90 active:scale-[0.99]" onClick={handleSubmit}>
        Place order
      </button>

      <p className="mt-4 text-center text-xs text-(--color-muted)">
        Your order is secure and protected.
      </p>

    </aside>
  );
}