import "./App.css";

import Produtos from "./Components/Product/Produtos";
import Header from "./Components/Header/Header";

import Provider from "./context/Provider";
import Cart from "./Components/Header/Cart";

function App() {
  return (
    <>
      <Provider>
        <Header />
        <Produtos />
        <Cart />
      </Provider>
    </>
  );
}

export default App;
