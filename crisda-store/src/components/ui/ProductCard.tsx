import products from ''

import React from 'react'

export default function ProductCard({product}) {
  return (
    <div className="group">
  <div
    className="
      relative
      aspect-square
      overflow-hidden
      rounded-[var(--radius-xl)]
      bg-[var(--color-surface)]
    "
  >
    <img
      src={product.image}
      alt={product.name}
      className="
        h-full
        w-full
        object-cover
        transition
        duration-500
        group-hover:scale-105
      "
    />
  </div>

  <div className="mt-4">
    <p
      className="
        text-xs
        uppercase
        tracking-[0.15em]
        text-(--color-muted)]
      "
    >
      {product.category}
    </p>

    <h3 className="mt-2 text-xl">
      {product.name}
    </h3>

    <p className="mt-2 text-sm text-(--color-muted)]">
      ${product.price}
    </p>
  </div>
</div>
  )
}


