import React, { useContext } from "react";
import "../../styles/Cart.css";
import CartItem from "./CartItem";
import AppContext from "../../context/appContext";
import formatCurrency from "../../utils/formatCurrency";

const Cart = () => {
  const { cartItems, isCartVisible } = useContext(AppContext);

  const totalValor = cartItems.reduce((acc, item) => {
    return item.price + acc;
  }, 0);

  return (
    <section className={`cart ${isCartVisible ? "cart-active" : ""}`}>
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} data={item} />
        ))}
      </div>
      <div className="cart-resume">{formatCurrency(totalValor, "BRL")}</div>
    </section>
  );
};

export default Cart;
