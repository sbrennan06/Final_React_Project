## Final React Project

This project is an enhancement of my existing Mini-Storefront application. I added in a meaningful, data-driven bar chart that visualizes the number of products available in each category. The bar chart updates dynamically whenever the user applies filters such as Category or Maximum Price.

The Mini-Storefront is a basic build where shoppers can browse products, filter by category and price, add items to cart, view items in cart, view cart totals, see product stock updates over time, and view loading, error, and empty states.

## How to Run the Project

1. Clone or download this repository
2. Open the project folder in VS Code.
3. Install Dependencies: npm install
4. Start the development server: npm run dev
5. Open `http://localhost:3000` in your browser to see the result.

## Project Enhancement Overview

A new component named **CategoryChart.jsx** was created to:

1. Use the filtered product list
2. Counts existing products in each category
3. Display those counts visually as a horizontal bar chart
4. Updates automatically and immediately when filters change
5. Use clean and readable CSS for a stylish UI

This chart provides a data visualization tool for the user.

## Github Copilot Reflection

I used GitHub Copilot as a writing assistant for:

1. Generating starter JSX coding structures
2. Suggesting CSS for layout, space, and alignment
3. Reminding me of correct React and JSX syntax when building new components

Copilot helped speed up smaller pieces of the workflow and reduced repetitive typing.

## Rejection Copilot Suggestion

Copilot suggested this JSX structure for my bar chart wrapper:

`<div className="category-chart-bar-container">`

But the CSS Copilot generated earlier used `.category-chart-bar-wrapper`

This mismatch caused the bars to not display at all, since the class names did not match between the files. Copilot continued to provide the wrong class name (container) even though the CSS was already written using a different class name (wrapper).

I rejected Copilot's suggestion and repalced with:
`<div className="category-chart-bar-wrapper">`

## Time Saved Using Copilot

Copilot saved me time when suggesting concise structures for mapping and counting categories. For example, Copilot provided this coding block below and saved me the time of typing it all out.

`const categoryCounts = categories.map((cat) => ({`
`category: cat,`
`count: products.filter((p) => p.category === cat).length`
`}));`
