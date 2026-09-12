"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import Navbar from "@/components/layout/NavBar";
import Container from "@/components/Container";
import FilterBox from "@/components/shop/FilterBox";
import ProductCard from "@/components/ui/ProductCard";
import { products } from "@/data/products.local";

export default function Products() {
  const [selectedCategory, setSelectedCategory] =
    useState("All Items");
  const [searchTerm, setSearchTerm] = useState(() => {
    if (typeof window === "undefined") return "";
    return new URLSearchParams(window.location.search).get("search") ?? "";
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
  });

  const scrollPrev = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  
  const hypedProducts = products.filter(
    (product) => product.collection === "hyped"
  );

  const categories = Array.from(
    new Set(products.map((product) => product.category))
  );


  const normalizedSearchTerm = searchTerm.trim().toLowerCase();
  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      selectedCategory === "All Items" ||
      product.category === selectedCategory;
    const searchableText = [
      product.name,
      product.category,
      product.description,
      ...product.tags,
    ]
      .join(" ")
      .toLowerCase();
    const matchesSearch = searchableText.includes(normalizedSearchTerm);

    return matchesCategory && matchesSearch;
  });

  const handleCategory = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    document.getElementById("product-list")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const querySearchTerm = new URLSearchParams(window.location.search).get(
      "search"
    );

    if (querySearchTerm) {
      document.getElementById("product-list")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  return (
    <>
      <Navbar onSearch={handleSearch} />

      <main>
        
        <Container y="0">
          <div className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center">
            <FilterBox />

            <h2 className="text-lg sm:text-xl lg:text-2xl">Inventory</h2>
          </div>
        </Container>

        <section>
          <Container y="0">
    
            <div className="mb-5 flex w-full items-center justify-between">
              <button
                type="button"
                className="
                  rounded-full
                  border
                  border-neutral-200
                  bg-white
                  px-4
                  py-2
                  text-xl
                  font-bold
                  transition
                  hover:bg-neutral-100
                "
              >
                HYPED
              </button>

              <div className="hidden gap-2 sm:flex">
                <button
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous products"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-200
                    bg-white
                    transition
                    hover:bg-neutral-100
                  "
                >
                  <ChevronLeft size={18} />
                </button>

                <button
                  type="button"
                  onClick={scrollNext}
                  aria-label="Next products"
                  className="
                    flex
                    h-10
                    w-10
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-200
                    bg-white
                    transition
                    hover:bg-neutral-100
                  "
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

           
            <div
              ref={emblaRef}
              className="min-w-0 overflow-hidden"
            >
              <div className="-ml-3 flex touch-pan-y sm:-ml-4">
                {hypedProducts.map((product) => (
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
                    <article className="group">
                    
                      <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-neutral-100">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="
                            (max-width: 640px) 78vw,
                            (max-width: 768px) 48vw,
                            (max-width: 1024px) 31vw,
                            (max-width: 1280px) 23vw,
                            19vw
                          "
                          className="
                            object-cover
                            transition
                            duration-500
                            ease-out
                            group-hover:scale-[1.03]
                          "
                        />

                        <span
                          className="
                            absolute
                            left-3
                            top-3
                            rounded-full
                            bg-white/90
                            px-3
                            py-1.5
                            text-[11px]
                            font-medium
                            text-neutral-800
                            backdrop-blur-sm
                          "
                        >
                          Hyped
                        </span>
                      </div>

                      {/* Product information */}
                      <div className="pt-4">
                        <h3 className="text-sm font-medium text-neutral-900 sm:text-base">
                          {product.name}
                        </h3>

                        <div className="mt-2">
                          <span className="text-sm font-semibold text-neutral-900">
                            ₹{product.price.toLocaleString("en-IN")}
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
                  type="button"
                  onClick={scrollPrev}
                  aria-label="Previous products"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-200
                    bg-white
                  "
                >
                  <ChevronLeft size={16} />
                </button>

                <button
                  type="button"
                  onClick={scrollNext}
                  aria-label="Next products"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-neutral-200
                    bg-white
                  "
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </Container>
        </section>

    
        <section id="product-list" className="scroll-mt-24">
          <Container>
            <div className="py-8">
              {/* Categories */}
              <div className="flex gap-4 overflow-x-auto text-lg font-semibold">
                {["All Items", ...categories].map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => handleCategory(category)}
                    className={`whitespace-nowrap transition ${
                      selectedCategory === category
                        ? "text-black"
                        : "text-neutral-400"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div
                className="
                  mt-6
                  grid
                  grid-cols-2
                  gap-4
                  sm:grid-cols-3
                  md:grid-cols-4
                "
              >
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                  />
                ))}

                {filteredProducts.length === 0 && (
                  <p className="col-span-full py-12 text-center text-sm text-neutral-500">
                    No products found. Try another search or category.
                  </p>
                )}
              </div>
            </div>
          </Container>
        </section>
      </main>
    </>
  );
}