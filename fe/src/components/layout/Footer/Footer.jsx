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
              E-COM
            </Link>

            <p>
             
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
              123456789
            </a>

            <p>
              <MapPin size={16} />
              Улаанбаатар, Монгол
            </p>

          </div>

        </div>

        <div className="footer__bottom">

          <p>
            © 2026 E-COM.
            All rights reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;