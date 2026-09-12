"use client";

import { useState } from "react";

export default function Payment() {
  const [payment, setPayment] = useState("upi");

  const methods = [
    {
      id: "upi",
      title: "UPI",
      description: "Google Pay, PhonePe, Paytm",
    },
    {
      id: "card",
      title: "Card",
      description: "Credit or debit card",
    },
    {
      id: "cod",
      title: "Cash on delivery",
      description: "Pay when your order arrives",
    },
  ];

  return (
    <section className="rounded-3xl bg-(--color-surface) p-6 md:p-8">

      <div className="flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-xs text-white">
          02
        </span>

        <h2 className="text-lg font-medium">
          Payment
        </h2>
      </div>

      <div className="mt-6 space-y-3">

        {methods.map((method) => (
          <label
            key={method.id}
            className={`flex cursor-pointer items-center gap-4 rounded-2xl border p-4 transition ${
              payment === method.id
                ? "border-black bg-white"
                : "border-black/10"
            }`}
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={payment === method.id}
              onChange={() => setPayment(method.id)}
            />

            <div>
              <p className="text-sm font-medium">
                {method.title}
              </p>

              <p className="mt-1 text-xs text-(--color-muted)">
                {method.description}
              </p>
            </div>
          </label>
        ))}

      </div>
    </section>
  );
}