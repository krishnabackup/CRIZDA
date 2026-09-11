"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useCallback } from "react";

import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import product4 from "../../assets/product4.jpg";
import product5 from "../../assets/product5.jpg";
import product6 from "../../assets/product6.jpg";

const products = [
  {
    id: 1,
    name: "Classic Linen Shirt",
    price: 1499,
    oldPrice: 1799,
    rating: 4.8,
    image: product1,
  },
  {
    id: 2,
    name: "Everyday Sneakers",
    price: 2199,
    oldPrice: 2599,
    rating: 4.7,
    image: product2,
  },
  {
    id: 3,
    name: "Minimal Leather Bag",
    price: 1899,
    oldPrice: 2299,
    rating: 4.9,
    image: product3,
  },
  {
    id: 4,
    name: "Relaxed Cotton Tee",
    price: 899,
    oldPrice: 1199,
    rating: 4.8,
    image: product4,
  },
  {
    id: 5,
    name: "Classic Denim",
    price: 1699,
    oldPrice: 1999,
    rating: 4.6,
    image: product5,
  },
  {
    id: 6,
    name: "Everyday Backpack",
    price: 1999,
    oldPrice: 2499,
    rating: 4.8,
    image: product6,
  },
];

export default function MostSoldItems() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-[#faf9f6] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

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

          <div className="hidden gap-2 sm:flex">
            <button
              onClick={scrollPrev}
              aria-label="Previous products"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:bg-neutral-100"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              onClick={scrollNext}
              aria-label="Next products"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-200 bg-white transition hover:bg-neutral-100"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-3 flex touch-pan-y sm:-ml-4">

            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-0 flex-[0_0_78%] pl-3 sm:flex-[0_0_48%] sm:pl-4 md:flex-[0_0_33.333%] lg:flex-[0_0_25%]"
              >
                <article className="group">

                  <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 78vw, (max-width: 768px) 48vw, (max-width: 1024px) 33vw, 25vw"
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium text-neutral-800 backdrop-blur-sm">
                      Bestseller
                    </span>
                  </div>

                 
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
                    </div>

                
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-sm font-semibold text-neutral-900">
                        ₹{product.price.toLocaleString("en-IN")}
                      </span>

                      <span className="text-xs text-neutral-400 line-through">
                        ₹{product.oldPrice.toLocaleString("en-IN")}
                      </span>
                    </div>

                  </div>
                </article>
              </div>
            ))}

          </div>
        </div>

        <div className="mt-6 flex items-center justify-between sm:hidden">

          <p className="text-xs text-neutral-400">
            Swipe to explore
          </p>

          <div className="flex gap-2">
            <button
              onClick={scrollPrev}
              aria-label="Previous products"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-neutral-200 bg-white"
            >
              <ChevronLeft size={16} />
            </button>

            <button
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