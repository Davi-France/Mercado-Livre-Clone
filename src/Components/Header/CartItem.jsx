import React, { useContext } from "react";
import { CiSquareRemove } from "react-icons/ci";
import "../../styles/CartItem.css";
import formatCurrency from "../../utils/formatCurrency";
import AppContext from "../../context/appContext";

const CartItem = ({ data }) => {
  const { id, thumbnail, title, price } = data;
  const { cartItems, setCartItems } = useContext(AppContext);

  function handleDeleteItem() {
    const updatedItems = cartItems.filter((item) => item.id != id);
    setCartItems(updatedItems);
  }

  return (
    <section className="cart-item">
      <img src={thumbnail} alt="" />
      <div className="cart-item-content">
        <h3 className="cart-item-title">{title}</h3>
        <h3 className="cart-item-price">{formatCurrency(price, "BRL")}</h3>
        <button type="button" onClick={handleDeleteItem}>
          <CiSquareRemove />
        </button>
      </div>
    </section>
  );
};

export default CartItem;
