// src/pages/Products/Products.jsx

import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom"; 
import ProductCard from "../../components/product/ProductCard";
import { products } from "../../data/products";
import "./Products.css";

export default function Products() {
  const [searchParams] = useSearchParams();

  const category = searchParams.get("category");
  const search = searchParams.get("search");

  const [sort, setSort] = useState("default");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (category) {
      result = result.filter(
        (product) => product.categorySlug === category
      );
    }

    if (search) {
      result = result.filter((product) =>
        product.name
          .toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (sort === "low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sort === "high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sort === "new") {
      result.sort(
        (a, b) => Number(b.isNew) - Number(a.isNew)
      );
    }

    return result;
  }, [category, search, sort]);

  return (

      <main className="products-page">

        <div className="products-header">
          <div>
            <p>SHOP</p>
            <h1>
              {category || search
                ? "Таны хайлт"
                : "Бүх бараа"}
            </h1>
            <span>
              {filteredProducts.length} бүтээгдэхүүн
            </span>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="default">Эрэмбэлэх</option>
            <option value="new">Шинээр</option>
            <option value="low">Үнэ бага → их</option>
            <option value="high">Үнэ их → бага</option>
          </select>
        </div>

        <div className="products-layout">

          <aside className="filters">
            <h3>Ангилал</h3>

            <a href="/products">Бүгд</a>
            <a href="/products?category=women">
              Эмэгтэй хувцас
            </a>
            <a href="/products?category=men">
              Эрэгтэй хувцас
            </a>
            <a href="/products?category=jewelry">
              Гоёл чимэглэл
            </a>
            <a href="/products?category=perfume">
              Үнэртэн
            </a>
            <a href="/products?category=bags">
              Цүнх
            </a>
            <a href="/products?category=shoes">
              Гутал
            </a>
            <a href="/products?category=watches">
              Цаг
            </a>
          </aside>

          <div className="all-products-grid">
            {filteredProducts.map((product) => (
              <ProductCard
                product={product}
                key={product.id}
              />
            ))}
          </div>

        </div>

      </main>
  );
}