"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { ShoppingBag, Search, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { COMPANY_NAME } from "@/data/constants";

type NavbarProps = {
  onSearch?: (searchTerm: string) => void;
};

export default function Navbar({ onSearch }: NavbarProps) {
  const router = useRouter();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmedSearchTerm = searchTerm.trim();

    if (!trimmedSearchTerm) return;

    if (onSearch) {
      onSearch(trimmedSearchTerm);
      return;
    }

    router.push(`/products?search=${encodeURIComponent(trimmedSearchTerm)}`);
  };

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
          {isSearchOpen && (
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                autoFocus
                type="search"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
                placeholder="Search products"
                aria-label="Search products"
                className="w-32 border-b border-(--color-border) bg-transparent px-1 py-2 text-sm outline-none sm:w-44"
              />
            </form>
          )}

          <button
            type="button"
            aria-label={isSearchOpen ? "Close search" : "Search"}
            onClick={() => setIsSearchOpen((open) => !open)}
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