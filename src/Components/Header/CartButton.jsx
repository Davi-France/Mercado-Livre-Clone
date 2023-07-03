import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../../styles/CartButton.css";
import AppContext from "../../context/appContext";

const CartButton = () => {
  const { cartItems, isCartVisible, setIsCartVisible } = useContext(AppContext);

  return (
    <button
      type="button"
      className="cart-button"
      onClick={() => setIsCartVisible(!isCartVisible)}
    >
      <AiOutlineShoppingCart />
      {cartItems.length > 0 ? (
        <span className="cart-status">{cartItems.length}</span>
      ) : (
        ""
      )}
    </button>
  );
};

export default CartButton;
