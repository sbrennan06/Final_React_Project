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

      <div className="category-chart-rows">
        {categoryCounts.map((item) => {
          const widthPct = maxCount === 0 ? 0 : (item.count / maxCount) * 100;
          return (
            <div key={item.category} className="category-chart-row">
              <span className="category-chart-label">{item.category}</span>
              <div className="category-chart-bar-wrapper">
                <div
                  className="category-chart-bar"
                  style={{ width: `${widthPct}%` }}
                />
              </div>

              <span className="category-chart-value">{item.count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
