
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Shirt,
  Sparkles,
  Watch,
  Gem,
  ShoppingBag,
  Baby,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import zurag2 from "../../../assets/zurag/zurag2.jpg";
import zurag3 from "../../../assets/zurag/zurag3.jpg";
import zurag4 from "../../../assets/zurag/zurag4.jpg";
import zurag5 from "../../../assets/zurag/zurag5.jpg";

import "./Categories.css";

const categories = [
  { id: 1, name: "Эмэгтэй хувцас", slug: "women", icon: Shirt },
  { id: 2, name: "Эрэгтэй хувцас", slug: "men", icon: ShoppingBag },
  { id: 3, name: "Гоёл чимэглэл", slug: "jewelry", icon: Gem },
  { id: 4, name: "Гоо сайхан", slug: "beauty", icon: Sparkles },
  { id: 5, name: "Цүнх, хэрэглэл", slug: "bags", icon: Watch },
  { id: 6, name: "Хүүхдийн бараа", slug: "kids", icon: Baby },
];

const slides = [
  {
    id: 1,
    image: zurag2,
    title: "Өдөр тутмын хэв маяг",
    subtitle: "EVERYDAY ESSENTIALS",
    category: "women",
  },
  {
    id: 2,
    image: zurag3,
    title: "Өөрийн өнгө төрхөө ол",
    subtitle: "FIND YOUR STYLE",
    category: "men",
  },
  {
    id: 3,
    image: zurag4,
    title: "Жижиг деталь, том ялгаа",
    subtitle: "BEAUTY & DETAILS",
    category: "beauty",
  },
  {
    id: 4,
    image: zurag5,
    title: "Өөртөө зориулсан сонголт",
    subtitle: "MADE FOR YOU",
    category: "bags",
  },
];

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((current) =>
      current === 0 ? slides.length - 1 : current - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="categories-section">
      {/* Full-width carousel — Header-ийн шууд доор */}
      <div className="full-carousel">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`full-carousel-slide ${
              activeIndex === index ? "active" : ""
            }`}
            aria-hidden={activeIndex !== index}
          >
            <img src={slide.image} alt={slide.title} />

            <div className="full-carousel-overlay">
              <span>{slide.subtitle}</span>
              <h1>{slide.title}</h1>

              <Link
                to={`/products?category=${slide.category}`}
                tabIndex={activeIndex === index ? 0 : -1}
                className="full-carousel-link"
              >
                Бүтээгдэхүүн үзэх <span>↗</span>
              </Link>
            </div>
          </div>
        ))}

        <button
          type="button"
          className="full-carousel-arrow prev"
          onClick={prevSlide}
          aria-label="Өмнөх зураг"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          type="button"
          className="full-carousel-arrow next"
          onClick={nextSlide}
          aria-label="Дараагийн зураг"
        >
          <ChevronRight size={26} />
        </button>

        <div className="full-carousel-dots">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              aria-label={`${index + 1}-р зураг`}
              className={activeIndex === index ? "active" : ""}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Category хэсэг — carousel-ийн доор */}
      <div className="categories-container">
        <div className="categories-heading">
          <span>SHOP BY CATEGORY</span>

          <h2>
            Өөрт тохирохоо
            <br />
            <em>сонгоорой.</em>
          </h2>

          <p>
            Таны өдөр тутмын хэв маягт тохирох
            бүтээгдэхүүнүүдийг нэг дороос.
          </p>
        </div>

        <div className="categories-grid">
          {categories.map((category) => {
            const Icon = category.icon;

            return (
              <Link
                key={category.id}
                to={`/products?category=${category.slug}`}
                className="category-card"
              >
                <div className="category-icon">
                  <Icon size={26} strokeWidth={1.4} />
                </div>

                <div className="category-content">
                  <span>EXPLORE</span>
                  <h3>{category.name}</h3>
                </div>

                <div className="category-arrow">↗</div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Categories;
