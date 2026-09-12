import Container from "@/components/Container";
import Navbar from "@/components/layout/NavBar";
import Image from "next/image";
import { products } from "@/data/products";
import ProductGallery from "@/components/products/ProductGallery";
import ProductReviewSummary from "@/components/products/ProductReviewSummary";
import PairWith from "@/components/products/PairitWith";
export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = products.find( value => Number(id) == value.id ) 

  if(!product) {
    return <div>
      No Product
    </div>
  }
  return (
    <>
      <Navbar/>
      <Container>
        <div className="flex justify-between py-4">
          <div className="flex flex-col gap-4">
          <div>
           <ProductGallery
             product={product as Parameters<typeof ProductGallery>[0]["product"]}
           />
          </div>
            <section className="py-12 md:py-16">
          <ProductReviewSummary
            product={product as Parameters<typeof ProductReviewSummary>[0]["product"]}
          />
        </section>
        <section className="py-12 md:py-16">
          <PairWith product={product} />
        </section>
        </div>
          <div className="w-full flex h-full flex-col max-w-xl rounded-3xl bg-[#E9DCC9] p-6 md:p-8 lg:p-10">
  
  {/* Category */}
  <p className="mb-3 text-sm font-medium uppercase tracking-widest text-gray-500">
    {product.category}
  </p>

  {/* Product name */}
  <h1 className="text-3xl font-semibold tracking-tight text-gray-900 md:text-4xl">
    {product.name}
  </h1>

  {/* Rating */}
  <div className="mt-4 flex items-center gap-2">
    <div className="flex gap-1 text-yellow-500">
      {"★".repeat(Math.round(product.rating))}
    </div>

    <span className="text-sm text-gray-500">
      {product.rating} / 5
    </span>
  </div>

  {/* Price */}
  <div className="mt-6">
    <span className="text-3xl font-semibold text-gray-900">
      ₹{product.price}
    </span>

    <span className="ml-3 text-sm text-gray-500">
      Inclusive of all taxes
    </span>
  </div>

  {/* Description */}
  <div className="mt-8 border-t border-black/10 pt-6">
    <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-700">
      About this piece
    </h2>

    <p className="mt-3 text-[15px] leading-7 text-gray-600">
      {product.description}
    </p>
  </div>

  {/* Colors */}
  <div className="mt-7">
    <h2 className="text-sm font-semibold text-gray-800">
      Available colors
    </h2>

    <div className="mt-3 flex flex-wrap gap-2">
      {product.colors.map((color) => (
        <button
          key={color}
          className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-gray-700 transition hover:border-black"
        >
          {color}
        </button>
      ))}
    </div>
  </div>

  {/* Vendor */}
  <div className="mt-7 rounded-2xl bg-white/70 p-4">
    <p className="text-xs uppercase tracking-wider text-gray-400">
      Crafted by
    </p>

    <p className="mt-1 font-medium text-gray-800">
      Crisda Studio
    </p>

    <p className="mt-1 text-sm text-gray-500">
      Curated aesthetic objects for everyday spaces.
    </p>
  </div>

  {/* Shipping / availability */}
  <div className="mt-6 grid grid-cols-2 gap-3">
    <div className="rounded-2xl bg-white/70 p-4">
      <p className="text-xs text-gray-400">Availability</p>
      <p className="mt-1 text-sm font-medium text-green-700">
        In Stock
      </p>
    </div>

    <div className="rounded-2xl bg-white/70 p-4">
      <p className="text-xs text-gray-400">Delivery</p>
      <p className="mt-1 text-sm font-medium text-gray-800">
        3–5 Days
      </p>
    </div>
  </div>

  {/* CTA */}
  <div className="mt-8 flex gap-3">
    <button className="flex-1 rounded-full bg-gray-900 px-6 py-4 font-medium text-white transition hover:bg-gray-800">
      Add to Cart
    </button>

    <button className="rounded-full border border-black/10 bg-white px-5 py-4 transition hover:bg-gray-50">
      ♡
    </button>
  </div>

</div>
        </div>
      </Container>
    </>
  );
}