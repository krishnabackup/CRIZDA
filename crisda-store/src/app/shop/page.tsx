import Navbar from '@/components/layout/NavBar'
import React from 'react'
import Container from '@/components/Container'
import Footer from '@/components/layout/Footer'
import FilterBox from '@/components/shop/FilterBox'
export default function shop() {
  return (
    <>
    <Navbar/>
    <main>     
      <FilterBox/>
    </main>

    </>
  )
}
