import React, { useContext } from "react";
import "../../styles/ProductCard.css";
import formatCurrency from "../../utils/formatCurrency";
import { AiOutlineShoppingCart } from "react-icons/ai";
import AppContext from "../../context/appContext";

const ProductCard = ({ data }) => {
  const { title, price, thumbnail } = data;

  const { cartItems, setCartItems } = useContext(AppContext);

  const handleAddCart = (event) => {
    event.preventDefault();

    setCartItems([...cartItems, data]);
  };

  return (
    <div className="productCard">
      <img src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")} alt="" />
      <div className="product-info">
        <p>{formatCurrency(price, "BRL")}</p>
        <h2>{title}</h2>
        <button onClick={handleAddCart}>
          <AiOutlineShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
