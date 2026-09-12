"use client";

import { ProductType } from "@/types/products.type";
import Image from "next/image";
import { useState } from "react";


type ProductGalleryProps = {
  product: ProductType;
};

export default function ProductGallery({
  product,
}: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(
    product.images[0]
  );

  return (
    <div className="w-full">
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-[#f5f2ec]">
        <Image
          src={selectedImage}
          alt={product.name}
          fill
          priority
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 55vw"
        />
      </div>

      <div className="mt-4 grid grid-cols-4 gap-3">
        {product.images.map((image, index) => (
          <button
            key={image}
            onClick={() => setSelectedImage(image)}
            className={`relative aspect-square overflow-hidden rounded-2xl bg-[#f5f2ec] ${
              selectedImage === image
                ? "ring-2 ring-black ring-offset-2"
                : ""
            }`}
          >
            <Image
              src={image}
              alt={`${product.name} view ${index + 1}`}
              fill
              className="object-cover"
              sizes="120px"
            />
          </button>
        ))}
      </div>

      <div className="mt-8">
        <p className="text-sm font-semibold text-gray-800">
          Color
        </p>

        <div className="mt-3 flex flex-wrap gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm transition hover:border-black"
            >
              {color}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}