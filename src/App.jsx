import React, { useState } from "react";
import Router from "./Router/index";
import { CartContext } from "./Context/CartContext";
import { GlobalStyled } from "./GlobalStyled";

export default function App() {
  const [produto, setProduto] = useState([]);

  return (
    <>
      <CartContext.Provider value={{ produto, setProduto }}>
        <GlobalStyled />
        <Router />
      </CartContext.Provider>
    </>
  );
}
