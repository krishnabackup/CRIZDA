import React from 'react'
import heroImage from '../../assets/hero_image.png'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
export default function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">
      <Image
        src={heroImage}
        alt="Hero"
        fill
        priority
        className="object-cover"
      />

      {/* Content above image */}
      <div className="absolute inset-0 z-10 flex items-center font">
        <div className="ml-10  md:ml-44 max-w-lg">
          <h1 className="text-5xl font-bold text-[#392614]">
            Objects That Transform you life
          </h1>

          <p className="mt-4 text-lg text-[#5B4839]">
            Buy Buetifuly crafted aestetically pleasing crafts
          </p>
          <div className='mt-10'>
          <Link href={'/products'} className="mt-6 rounded-lg text-white bg-[#A05E38] px-6 py-3">
            Shop Now <ArrowRight aria-hidden="true" className="ml-2 inline-block" />
          </Link>
          </div>
        </div>
      </div>
    </section>
  );
}