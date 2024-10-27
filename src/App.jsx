import React, { useState } from "react";
import Router from "./Router/index";
import { CartContext } from "./Context/CartContext";
import { GlobalStyled } from "./GlobalStyled";

export default function App() {
  const [produto, setProduto] = useState([]);
  const [busca, setBusca] = useState("");

  return (
    <>
      <CartContext.Provider value={{ produto, setProduto, busca, setBusca }}>
        <GlobalStyled />
        <Router />
      </CartContext.Provider>
    </>
  );
}
