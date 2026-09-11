"use client";

import { useState } from "react";
import { X, SlidersHorizontal } from "lucide-react";

export default function FilterBox() {
  const [isOpen, setIsOpen] = useState(false);

  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(5000);
  const [rating, setRating] = useState("");
  const [sort, setSort] = useState("");

  const clearFilters = () => {
    setCategory("");
    setPrice(5000);
    setRating("");
    setSort("");
  };

  return (
    <>
      {/* Filter Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          flex items-center gap-2
          rounded-full border border-neutral-200
          bg-white px-4 py-2.5
          text-sm font-medium text-neutral-800
          transition hover:bg-neutral-50
        "
      >
        <SlidersHorizontal size={17} />
        Filters
      </button>

      {/* Background overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className={`
          fixed inset-0 z-40 bg-black/20
          transition-opacity duration-300
          ${
            isOpen
              ? "pointer-events-auto opacity-100"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* Filter Panel */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          h-full w-72 sm:w-80
          overflow-y-auto
          bg-white
          shadow-xl
          transition-transform duration-300 ease-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-neutral-100 bg-white px-5 py-4">
          <div>
            <h2 className="text-lg font-semibold text-neutral-900">
              Filters
            </h2>

            <p className="mt-0.5 text-xs text-neutral-400">
              Find what you are looking for
            </p>
          </div>

          <button
            onClick={() => setIsOpen(false)}
            aria-label="Close filters"
            className="
              flex h-9 w-9 items-center justify-center
              rounded-full
              text-neutral-500
              transition
              hover:bg-neutral-100
              hover:text-neutral-900
            "
          >
            <X size={18} />
          </button>
        </div>

        {/* Filters */}
        <div className="space-y-7 px-5 py-6">

          {/* Category */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-neutral-900">
              Category
            </h3>

            <div className="space-y-2.5">
              {["Home Decor", "Accessories", "Stationery", "Lifestyle"].map(
                (item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 text-sm text-neutral-600"
                  >
                    <input
                      type="radio"
                      name="category"
                      value={item}
                      checked={category === item}
                      onChange={(e) => setCategory(e.target.value)}
                      className="h-4 w-4 accent-black"
                    />

                    {item}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Price */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-sm font-medium text-neutral-900">
                Price
              </h3>

              <span className="text-xs text-neutral-500">
                ₹0 - ₹{price.toLocaleString("en-IN")}
              </span>
            </div>

            <input
              type="range"
              min="500"
              max="5000"
              step="100"
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="w-full accent-black"
            />

            <div className="mt-2 flex justify-between text-xs text-neutral-400">
              <span>₹500</span>
              <span>₹5,000</span>
            </div>
          </div>

          {/* Rating */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-neutral-900">
              Rating
            </h3>

            <div className="space-y-2.5">
              {["4★ & above", "3★ & above", "2★ & above"].map(
                (item) => (
                  <label
                    key={item}
                    className="flex cursor-pointer items-center gap-3 text-sm text-neutral-600"
                  >
                    <input
                      type="radio"
                      name="rating"
                      value={item}
                      checked={rating === item}
                      onChange={(e) => setRating(e.target.value)}
                      className="h-4 w-4 accent-black"
                    />

                    {item}
                  </label>
                )
              )}
            </div>
          </div>

          {/* Availability */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-neutral-900">
              Availability
            </h3>

            <label className="flex cursor-pointer items-center gap-3 text-sm text-neutral-600">
              <input
                type="checkbox"
                className="h-4 w-4 rounded accent-black"
              />

              In stock only
            </label>
          </div>

          {/* Sort */}
          <div>
            <h3 className="mb-3 text-sm font-medium text-neutral-900">
              Sort By
            </h3>

            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="
                w-full rounded-lg
                border border-neutral-200
                bg-white px-3 py-2.5
                text-sm text-neutral-700
                outline-none
                focus:border-neutral-400
              "
            >
              <option value="">Recommended</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="popular">Most Popular</option>
            </select>
          </div>
        </div>

        {/* Bottom actions */}
        <div className="sticky bottom-0 border-t border-neutral-100 bg-white p-4">
          <div className="flex gap-3">
            <button
              onClick={clearFilters}
              className="
                flex-1 rounded-lg
                border border-neutral-200
                px-4 py-2.5
                text-sm font-medium
                text-neutral-700
                transition hover:bg-neutral-50
              "
            >
              Clear
            </button>

            <button
              onClick={() => setIsOpen(false)}
              className="
                flex-1 rounded-lg
                bg-neutral-900
                px-4 py-2.5
                text-sm font-medium
                text-white
                transition hover:bg-neutral-800
              "
            >
              Apply
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}