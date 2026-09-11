import { COMPANY_NAME } from "@/data/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-[var(--color-border)] bg-[var(--color-surface)]">
      <div className="mx-auto max-w-[1280px] px-4 py-16 md:px-8 lg:px-12">

        <div className="grid gap-12 md:grid-cols-4">

          <div className="md:col-span-2">
            <h2 className="text-3xl">{COMPANY_NAME}</h2>

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--color-muted)]">
              Thoughtfully designed objects for work, travel and
              everyday life.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium">
              Explore
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-muted)]">
              <Link href="/shop">Shop</Link>
              <Link href="/shop">New Arrivals</Link>
              <Link href="/shop">Best Sellers</Link>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-medium">
              Help
            </h3>

            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--color-muted)]">
              <span>Shipping</span>
              <span>Returns</span>
              <span>Contact</span>
            </div>
          </div>

        </div>

        <div className="mt-16 border-t border-[var(--color-border)] pt-6 text-xs text-[var(--color-subtle)]">
          © 2026 {COMPANY_NAME}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}