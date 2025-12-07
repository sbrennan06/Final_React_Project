"use client";
export default function CategoryChart({ products }) {
  if (!products) {
    return null;
  }

  const totalShown = products.length;
  const categories = ["Electronics", "Furniture", "Books"];

  const categoryCounts = categories.map((cat) => {
    const count = products.filter((p) => p.category === cat).length;
    return { category: cat, count };
  });

  const maxCount = Math.max(...categoryCounts.map((c) => c.count), 0);

  return (
    <div className="category-chart">
      <h2>Products by Category</h2>

      <p>
        Showing {totalShown} product{totalShown !== 1 ? "s" : ""} across{" "}
        {categories.length} categories.
      </p>

      <ul>
        {categoryCounts.map((item) => (
          <li key={item.category}>
            {item.category}: {item.count}
          </li>
        ))}
      </ul>
    </div>
  );
}
