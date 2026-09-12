import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import { ProductType } from "../ui/ProductCard";

export default function PairWith({
  product,
}: {
  product: ProductType;
}) {
  const pairedProducts = products
    .filter(
      (item) =>
        item.id !== product.id &&
        item.category === product.category
    )
    .slice(0, 3);

  return (
    <div>
      <div className="mb-6">
        <p className="text-sm uppercase tracking-widest text-gray-500">
          Complete the look
        </p>

        <h2 className="mt-2 text-3xl font-semibold text-gray-900">
          Pair it with
        </h2>

        <p className="mt-2 text-gray-500">
          A few pieces that work beautifully together.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {pairedProducts.map((item) => (
          <Link
            href={`/products/${item.id}`}
            key={item.id}
            className="group"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#f5f2ec]">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover transition duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
            </div>

            <h3 className="mt-3 font-medium text-gray-900">
              {item.name}
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              ₹{item.price}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}