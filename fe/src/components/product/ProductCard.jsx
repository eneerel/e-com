import {
  Link,
} from "react-router-dom";

import {
  ArrowUpRight,
} from "lucide-react";

import "./ProductCard.css";

function ProductCard({ product }) {
  return (
    <Link
      to={`/products/${product.id}`}
      className="product-card"
    >

      <div className="product-card__image">

        <img
          src={product.image}
          alt={product.name}
        />

        <div className="product-card__arrow">
          <ArrowUpRight size={20} />
        </div>

      </div>

      <div className="product-card__info">

        <div>
          <p>
            {product.code}
          </p>

          <h3>
            {product.name}
          </h3>
        </div>

        <strong>
          {product.price.toLocaleString()}₮
        </strong>

      </div>

    </Link>
  );
}

export default ProductCard;