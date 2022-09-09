import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";

import { HeaderModalContext } from "./store/HeaderModalContext";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCart, setshowCart] = useState(false);

  const onCancelModalHandler = () => {
    setshowCart(false);
  }

  const onShowCartHandler = () => {
    setshowCart(true);
  }

  return (
    <CartProvider>
      <HeaderModalContext.Provider value={onShowCartHandler}>
        <Header />
      </HeaderModalContext.Provider>
      <main>
        <Meals />
      </main>
      {
        showCart && <Cart onHideHandler={onCancelModalHandler} />
      }
    </CartProvider>
  );
}

export default App;
