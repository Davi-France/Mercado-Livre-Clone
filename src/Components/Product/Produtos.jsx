import React, { useContext, useEffect } from "react";
import fetchProducts from "../../api/fetchProduct.js";
import ProductCard from "./ProductCard";
import "../../styles/Products.css";
import AppContext from "../../context/appContext";

const Produtos = () => {
  const { products, setProducts } = useContext(AppContext);

  useEffect(() => {
    fetchProducts("computador").then((response) => {
      setProducts(response);
    });
  }, []);

  if (products)
    return (
      <section className="products container">
        {products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </section>
    );
};

export default Produtos;
