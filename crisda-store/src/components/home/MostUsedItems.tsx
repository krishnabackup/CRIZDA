"use client";

import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback } from "react";

import { products } from "@/data/products";

export default function MostUsedItems() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    watchDrag: true,
  });

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const bestSellerProducts = products.filter(
    (product) => product.collection === "best-seller"
  );

  return (
    <section className="bg-[#faf9f6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
              Customer favorites
            </p>

            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-neutral-900 sm:text-4xl">
              Most Sold Items
            </h2>

            <p className="mt-2 max-w-md text-sm text-neutral-500">
              Loved by our customers, chosen again and again.
            </p>
          </div>

          {/* Desktop / Tablet controls */}
          <div className="hidden gap-2 sm:flex">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous products"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:bg-neutral-100"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next products"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:bg-neutral-100"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Embla viewport */}
        <div
          ref={emblaRef}
          className="w-full min-w-0 overflow-hidden touch-pan-y select-none"
          style={{ touchAction: "pan-y" }}
        >
          {/* Embla track */}
          <div className="-ml-3 flex sm:-ml-4">
            {bestSellerProducts.map((product) => (
              <div
                key={product.id}
                className="
                  min-w-0
                  shrink-0
                  grow-0
                  basis-[78%]
                  pl-3
                  sm:basis-[48%]
                  sm:pl-4
                  md:basis-[31%]
                  lg:basis-[23%]
                  xl:basis-[19%]
                "
              >
                <Link
                  href={`/products/${product.id}`}
                  className="group block"
                  draggable={false}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      draggable={false}
                      sizes="
                        (max-width: 640px) 78vw,
                        (max-width: 768px) 48vw,
                        (max-width: 1024px) 31vw,
                        (max-width: 1280px) 23vw,
                        19vw
                      "
                      className="
                        object-cover
                        pointer-events-none
                        transition
                        duration-500
                        ease-out
                        group-hover:scale-[1.03]
                      "
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium text-neutral-800 backdrop-blur-sm">
                      Bestseller
                    </span>
                  </div>

                  {/* Product information */}
                  <div className="pt-4">
                    <h3 className="text-sm font-medium text-neutral-900 sm:text-base">
                      {product.name}
                    </h3>

                    <div className="mt-1.5 flex items-center gap-1.5">
                      <Star
                        size={14}
                        fill="currentColor"
                        className="text-neutral-800"
                      />

                      <span className="text-xs text-neutral-500">
                        {product.rating}
                      </span>

                      <span className="text-xs text-neutral-400">
                        ({product.reviewCount})
                      </span>
                    </div>

                    <div className="mt-2">
                      <span className="text-sm font-semibold text-neutral-900">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile controls */}
        <div className="mt-6 flex items-center justify-between sm:hidden">
          <p className="text-xs text-neutral-400">Swipe to explore</p>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              aria-label="Previous products"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white"
            >
              <ChevronLeft size={16} />
            </button>

            <button
              type="button"
              onClick={scrollNext}
              aria-label="Next products"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}