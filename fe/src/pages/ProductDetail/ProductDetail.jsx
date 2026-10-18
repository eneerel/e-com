// src/pages/ProductDetail/ProductDetail.jsx

import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { Heart, Minus, Plus, ShoppingBag, Star } from "lucide-react";
import { products } from "../../data/products";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/Wishlist";
import "./ProductDetail.css";

export default function ProductDetail() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  const [quantity, setQuantity] = useState(1);

  const { addToCart } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  if (!product) {
    return (
        <div className="not-found">
          <h1>Бараа олдсонгүй.</h1>
          <Link to="/products">Бараа үзэх</Link>
        </div>
    );
  }

  return (

      <main className="detail-page">

        <div className="detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="detail-content">

          <p className="detail-category">
            {product.category}
          </p>

          <h1>{product.name}</h1>

          <div className="detail-rating">
            <Star fill="currentColor" />
            {product.rating}
            <span>({product.reviews} reviews)</span>
          </div>

          <div className="detail-price">
            {product.price.toLocaleString()}₮

            {product.oldPrice && (
              <del>
                {product.oldPrice.toLocaleString()}₮
              </del>
            )}
          </div>

          <p className="detail-description">
            Өдөр тутамд тохирох чанартай, загварлаг
            бүтээгдэхүүн. Таны хэв маягийг тодотгох
            онцгой сонголт.
          </p>

          <div className="detail-divider" />

          <div className="quantity-row">

            <span>Тоо ширхэг</span>

            <div className="quantity">
              <button
                onClick={() =>
                  setQuantity(Math.max(1, quantity - 1))
                }
              >
                <Minus />
              </button>

              <span>{quantity}</span>

              <button
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus />
              </button>
            </div>

          </div>

          <div className="detail-actions">

            <button
              className="add-cart"
              onClick={() =>
                addToCart(product, quantity)
              }
            >
              <ShoppingBag />
              Сагсанд нэмэх
            </button>

            <button
              className={`detail-wishlist ${
                isInWishlist(product.id)
                  ? "active"
                  : ""
              }`}
              onClick={() => toggleWishlist(product)}
            >
              <Heart
                fill={
                  isInWishlist(product.id)
                    ? "currentColor"
                    : "none"
                }
              />
            </button>

          </div>

          <div className="detail-info">
            <div>
              <strong>Хүргэлт</strong>
              <span>Улаанбаатар хот дотор</span>
            </div>

            <div>
              <strong>Буцаалт</strong>
              <span>7 хоногийн дотор</span>
            </div>

            <div>
              <strong>Төлбөр</strong>
              <span>Бүх төрлийн төлбөр</span>
            </div>
          </div>

        </div>

      </main>
  );
}