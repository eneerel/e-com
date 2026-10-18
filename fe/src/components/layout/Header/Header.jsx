import { useState } from "react";
import {
  Link,
  NavLink,
} from "react-router-dom";

import {
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

import { useCart } from "../../../context/CartContext";

import "./Header.css";

function Header() {
  const [menuOpen, setMenuOpen] =
    useState(false);

  const { cartCount } = useCart();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="container header__inner">

        <Link
          to="/"
          className="header__logo"
          onClick={closeMenu}
        >
          <strong>E-Com</strong>
        </Link>

        <nav
          className={`header__nav ${
            menuOpen
              ? "header__nav--open"
              : ""
          }`}
        >
          <NavLink
            to="/"
            onClick={closeMenu}
          >
            Нүүр
          </NavLink>

          <NavLink
            to="/products"
            onClick={closeMenu}
          >
            Бүтээгдэхүүн
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenu}
          >
            Бидний тухай
          </NavLink>

          <NavLink
            to="/contact"
            onClick={closeMenu}
          >
            Холбоо барих
          </NavLink>
        </nav>

        <div className="header__actions">

          <Link
            to="/cart"
            className="header__cart"
          >
            <ShoppingBag size={20} />

            <span>
              Сагс
            </span>

            {cartCount > 0 && (
              <b className="header__cart-count">
                {cartCount}
              </b>
            )}
          </Link>

          <button
            className="header__menu-button"
            onClick={() =>
              setMenuOpen(!menuOpen)
            }
          >
            {menuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>

        </div>

      </div>
    </header>
  );
}

export default Header;