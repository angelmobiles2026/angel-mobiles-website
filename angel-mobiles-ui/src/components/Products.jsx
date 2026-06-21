import React from "react";
import "./Products.scss";

const Products = () => {
  const categories = [
    { emoji: "📱", name: "Smartphones" },
    { emoji: "🎧", name: "Neckbands" },
    { emoji: "🎵", name: "Headphones" },
    { emoji: "⌚", name: "Smartwatches" },
    { emoji: "🔌", name: "Accessories" },
    { emoji: "💻", name: "Tablets" },
    { emoji: "🔊", name: "Audio Speakers" },
  ];
  return (
    <section className="section">
      <div className="section-header">
        <h2>SHOP BY CATEGORY</h2>
        <div className="underline" />
      </div>
      <div className="categories-grid">
        {categories.map((cat) => (
          <div key={cat.name} className="cat-card">
            <div className="cat-icon">{cat.emoji}</div>
            <span>{cat.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
