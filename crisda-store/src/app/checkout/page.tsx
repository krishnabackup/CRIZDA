"use client";

import CheckoutSummary from "@/components/checkout/CheckoutSummery";
import OrderForm from "@/components/checkout/OrderForm";
import Payment from "@/components/checkout/Payment";
import Container from "@/components/Container";
import Navbar from "@/components/layout/NavBar";

export default function CheckoutPage() {
  return (
    <>
    <Navbar/>
    <Container>
      <div className="mb-8 md:mb-10 mt-5">
        <h1 className="mt-2 text-3xl font-medium md:text-4xl">
          Checkout
        </h1>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px] lg:items-start">

        <main className="space-y-6">

          <OrderForm />

          <Payment />

        </main>

   
        <CheckoutSummary />

      </div>
    </Container>
    </>
  );
}