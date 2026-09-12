"use client";

import CartItemCard from "@/components/cart/CartDetails";
import CartSummary from "@/components/cart/CartSummary";
import Container from "@/components/Container";
import Navbar from "@/components/layout/NavBar";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartPage() {
  const { cartItems } = useCart();

  return (
    <>
    <Navbar/>
    <Container>
      <div className="mb-8">

        <h1 className="mt-2 text-3xl font-medium md:text-4xl">
          Cart
        </h1>

        <p className="mt-2 text-sm text-(--color-muted)">
          {cartItems.length} {cartItems.length === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_360px] lg:items-start">
        {/* LEFT */}
        <section className="space-y-4">
          {cartItems.length === 0 ? (
            <div className="rounded-3xl bg-(--color-surface) p-10 text-center">
              <h2 className="text-xl font-medium">
                Your cart is empty
              </h2>
              <span>
              <p className="mt-2 text-sm text-(--color-muted)">
                Find something beautiful for your space.
              </p>
              <Link href={'/products'}>Shop</Link>
              </span>
            </div>
          ) : (
            cartItems.map((item) => (
              <CartItemCard
                key={item.product.id}
                item={item}
              />
            ))
          )}
        </section>

        {/* RIGHT */}
        {cartItems.length > 0 && (
          <CartSummary />
        )}
      </div>
    </Container>
    </>
  );
}