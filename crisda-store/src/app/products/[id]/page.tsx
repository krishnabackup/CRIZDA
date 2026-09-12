import Container from "@/components/Container";
import Navbar from "@/components/layout/NavBar";
import { products } from "@/data/products.local";

import ProductGallery from "@/components/products/ProductGallery";
import ProductReviewSummary from "@/components/products/ProductReviewSummary";
import PairWith from "@/components/products/PairitWith";
import ProductInfo from "@/components/products/ProductInfo";

export default async function SingleProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find(
    (value) => Number(id) === value.id
  );

  if (!product) {
    return <div>No Product</div>;
  }

  return (
    <>
      <Navbar />

      <Container>
        <section
          className="
            grid
            grid-cols-1
            gap-6
            py-5
            sm:gap-8
            sm:py-8
            lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)]
            lg:gap-12
            lg:py-12
            xl:gap-16
          "
        >
          <div className="min-w-0">
            <ProductGallery product={product} />
          </div>

          <div className="min-w-0 lg:sticky lg:top-24 lg:h-fit">
            <ProductInfo product={product} />
          </div>
        </section>

        <section className="py-10 sm:py-12 md:py-16">
          <ProductReviewSummary product={product} />
        </section>

        <section className="py-10 sm:py-12 md:py-16">
          <PairWith product={product} />
        </section>
      </Container>
    </>
  );
}