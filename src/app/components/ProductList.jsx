"use client";

import ProductCard from "./ProductCard";

export default function ProductList({ products, cart, onAdd }) {
  return (
    <div>
      <ul>
        {products.map((p) => {
          const quantity = cart[p.id] || 0;
          return (
            <li key={p.id}>
              <ProductCard product={p} quantity={quantity} onAdd={onAdd} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
