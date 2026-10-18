// src/components/home/PromoBanner.jsx

import { Link } from "react-router-dom";
import "./PromoBanner.css";

export default function PromoBanner() {
  return (
    <section className="promo-banner">

      <div className="promo-content">
        <p>YOUR EVERYDAY ESSENTIALS</p>

        <h2>
          Өөрийнхөө хэв маягийг
          <br />
          өөрийнхөөрөө бүтээ.
        </h2>

        <Link to="/products">
          Цуглуулгыг харах
        </Link>
      </div>

    </section>
  );
}