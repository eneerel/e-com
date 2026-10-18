// src/components/home/FeaturedProducts.jsx

import { Link } from "react-router-dom";
import { products } from "../../../data/products";
import ProductCard from "../../product/ProductCard";
import "./FeaturedProducts.css";

export default function FeaturedProducts() {
  const featured = products.filter(
    (product) => product.isFeatured
  );

  return (
    <section className="featured-section">

      <div className="section-heading">
        <div>
          <p>OUR PICKS</p>
          <h2>Онцлох бараа</h2>
        </div>

        <Link to="/products">
          Бүх бараа →
        </Link>
      </div>

      <div className="products-grid">
        {featured.map((product) => (
          <ProductCard
            product={product}
            key={product.id}
          />
        ))}
      </div>

    </section>
  );
}