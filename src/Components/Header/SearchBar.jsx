import React, { useContext, useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../../styles/header.css";
import "../../styles/SearchBar.css";
import fetchProducts from "../../api/fetchProduct.js";
import AppContext from "../../context/appContext";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const { setProducts } = useContext(AppContext);

  const handleSearch = async (event) => {
    event.preventDefault();
    const products = await fetchProducts(searchValue);
    setProducts(products);
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        onChange={({ target }) => {
          setSearchValue(target.value);
        }}
        type="search"
        value={searchValue}
        placeholder="Buscar Produtos"
        className="search-input"
        required
      />

      <button type="submit" className="search-button">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
