"use client";

import Link from "next/link";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { COMPANY_NAME } from "@/data/constants";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-background)/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 md:px-8 lg:px-12">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-2xl tracking-wide"
        >
        {COMPANY_NAME}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm text-(--color-foreground) transition hover:text-(--color-primary)"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-sm text-(--color-foreground) transition hover:text-(--color-primary)"
          >
            Shop
          </Link>

          <Link
            href="/about"
            className="text-sm text-(--color-foreground) transition hover:text-(--color-primary)"
          >
            About
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            aria-label="Search"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-(--color-surface-soft)"
          >
            <Search size={19} strokeWidth={1.7} />
          </button>

          <Link
            href="/cart"
            aria-label="Shopping cart"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-(--color-surface-soft)"
          >
            <ShoppingBag size={19} strokeWidth={1.7} />
          </Link>

          <button
            aria-label="Open menu"
            className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-(--color-surface-soft) md:hidden"
          >
            <Menu size={21} />
          </button>
        </div>

      </div>
    </header>
  );
}