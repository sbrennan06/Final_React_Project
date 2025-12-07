"use client";
export default function CategoryChart({ products }) {
  if (!products) {
    return null;
  }

  return (
    <div className="category-chart">
      <h2>Products by Category</h2>
      <p>
        {" "}
        View {products.length} product {products.length !== 1 ? "s" : ""}.
      </p>

      <ul>
        {products.map((p) => (
          <li key={p.id}>
            {p.name} - Category: {p.category}
          </li>
        ))}
      </ul>
    </div>
  );
}
