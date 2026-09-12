"use client";

import Container from "@/components/Container";

export default function CheckoutPage() {
  return (
    <Container>

      {/* HEADER */}
      <div className="mb-8 md:mb-10">
        <p className="text-xs uppercase tracking-[0.2em] text-(--color-muted)">
          Crisda
        </p>

        <h1 className="mt-2 text-3xl font-medium md:text-4xl">
          Checkout
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:items-start">

        {/* LEFT */}
        <main className="space-y-6">

          <DeliveryForm />

          <PaymentMethod />

        </main>

        {/* RIGHT */}
        <CheckoutSummary />

      </div>
    </Container>
  );
}