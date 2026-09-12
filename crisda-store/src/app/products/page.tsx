'use client'

import Navbar from '@/components/layout/NavBar'
import Container from '@/components/Container'
import FilterBox from '@/components/shop/FilterBox'
import { ChevronLeft, ChevronRight , Star} from 'lucide-react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import product1 from "../../assets/product1.jpg";
import product2 from "../../assets/product2.jpg";
import product3 from "../../assets/product3.jpg";
import product4 from "../../assets/product4.jpg";
import product5 from "../../assets/product5.jpg";
import product6 from "../../assets/product6.jpg";
import ProductCard from '@/components/ui/ProductCard'
import { products } from '@/data/products'

const Topproducts = [
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

export default function Shop() {
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
  
    const handleCtegory = (category : string) => {
      
    }
  return (
    <>
    <Navbar/>
    <main>
      <Container>   
      <div className='flex gap-5 items-center'>
      <FilterBox/>
      <h2 className='text-lg sm:text-xl lg:text-2xl '>Inventory</h2>
      </div>
      </Container> 
      <section className='mt-5'>
        <Container y='10'>
           <div className="mb-4 f w-full ">
            <button
              className="flex h-auto w-auto p-2 font-bold text-2xl  rounded-4xl border border-neutral-200 bg-white transition hover:bg-neutral-100"
            >
              HYPED
            </button>
        </div>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="-ml-3 flex touch-pan-y sm:-ml-4">

            {Topproducts.map((product) => (
              <div
                key={product.id}
                className="min-w-0 flex-[0_0_38%] pl-3 sm:flex-[0_0_38%] sm:pl-4 md:flex-[0_0_13.333%] lg:flex-[0_0_15%]"
              >
                <article className="group">

                  <div className="relative aspect-4/5 overflow-hidden rounded-2xl bg-neutral-100">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 48vw, (max-width: 768px) 38vw, (max-width: 1024px) 22vw, 12vw"
                      className="object-cover transition duration-500 ease-out group-hover:scale-[1.03]"
                    />

                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-medium text-neutral-800 backdrop-blur-sm">
                      Bestseller
                    </span>
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
        </Container>
      </section>
      <section>
         <Container>
          <div className='py-4'>
            <div className='flex gap-4 text-lg font-semibold'>
              <button onClick={() => handleCtegory('All Items')}>All Items</button>
              <button onClick={() => handleCtegory('Home')}>Home</button>
              <button onClick={() => handleCtegory('Office')}>Office</button>
            </div>
                  <div className="grid grid-cols-2 gap-4 p-3 sm:grid-cols-3 md:grid-cols-4">
                    {
                      products.map(product => (
                        <ProductCard key={product.id} product={{id : product.id , image : product.image ,category:product.category ,collection: product.collection as 'best-seller' | 'hyped' | 'value-for-money', name: product.name , price : product.price , stock: Number(product.stock)}}/>
                      ))
}

            </div>
          </div>
         </Container>
      </section>
    </main>

    </>
  )
}
