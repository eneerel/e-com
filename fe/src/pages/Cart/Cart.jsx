
import { Link, useNavigate } from "react-router-dom";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "../../context/CartContext";
import "./Cart.css";

export default function Cart() {
  const {
    cart,
    cartTotal,
    updateQuantity,
    removeFromCart,
  } = useCart();

  const navigate = useNavigate();

  if (cart.length === 0) {
    return (

        <main className="empty-cart">
          <h1>Таны сагс хоосон байна.</h1>
          <p>Та бүтээгдэхүүн сонгон сагсандаа нэмнэ үү.</p>
          <Link to="/products">Дэлгүүр хэсэх</Link>
        </main>

    );
  }

  return (
    

      <main className="cart-page">

        <h1>Таны сагс</h1>

        <div className="cart-layout">

          <div className="cart-items">

            {cart.map((item) => (
              <div className="cart-item" key={item.id}>

                <img src={item.image} alt={item.name} />

                <div className="cart-item-info">
                  <span>{item.category}</span>
                  <h3>{item.name}</h3>
                  <strong>
                    {item.price.toLocaleString()}₮
                  </strong>
                </div>

                <div className="cart-quantity">
                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.quantity - 1
                      )
                    }
                  >
                    <Minus />
                  </button>

                  <span>{item.quantity}</span>

                  <button
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        item.quantity + 1
                      )
                    }
                  >
                    <Plus />
                  </button>
                </div>

                <button
                  className="remove-item"
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  <Trash2 />
                </button>

              </div>
            ))}

          </div>

          <aside className="cart-summary">

            <h2>Захиалгын дүн</h2>

            <div>
              <span>Бүтээгдэхүүн</span>
              <strong>
                {cartTotal.toLocaleString()}₮
              </strong>
            </div>

            <div>
              <span>Хүргэлт</span>
              <strong>Үнэгүй</strong>
            </div>

            <hr />

            <div className="total">
              <span>Нийт</span>
              <strong>
                {cartTotal.toLocaleString()}₮
              </strong>
            </div>

            <button
              onClick={() => navigate("/checkout")}
            >
              Төлбөр төлөх
            </button>

          </aside>

        </div>

      </main>
  );
}