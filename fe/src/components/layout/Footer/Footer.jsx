import {
  Link,
} from "react-router-dom";

import {
  Phone,
  MapPin,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <div className="footer__main">

          <div className="footer__brand">

            <Link
              to="/"
              className="footer__logo"
            >
              PRIME

              <span>
                FURNITURE
              </span>
            </Link>

            <p>
              Таны орон зайд зориулсан
              дотоодын үйлдвэрлэл.
            </p>

          </div>

          <div className="footer__links">

            <h3>
              Холбоос
            </h3>

            <Link to="/">
              Нүүр
            </Link>

            <Link to="/products">
              Бүтээгдэхүүн
            </Link>

            <Link to="/custom-order">
              Захиалгат буйдан
            </Link>

            <Link to="/about">
              Бидний тухай
            </Link>

          </div>

          <div className="footer__contact">

            <h3>
              Холбоо барих
            </h3>

            <a href="tel:80500125">
              <Phone size={16} />
              80500125
            </a>

            <p>
              <MapPin size={16} />
              Улаанбаатар, Монгол
            </p>

          </div>

        </div>

        <div className="footer__bottom">

          <p>
            © 2026 PRIME Furniture.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;