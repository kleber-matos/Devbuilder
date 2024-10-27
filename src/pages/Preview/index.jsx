import React, { useContext } from "react";
import Data from "../../data/data.json";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

export default function index() {
  const { id } = useParams();
  const selecioando = Data.find((e) => e.id == id);

  const { produto, setProduto } = useContext(CartContext);

  const add = () => {
    setProduto(produto.concat(selecioando));
  };

  return (
    <>
      <h2>Preview</h2>
      <div>
        <h2>{selecioando.name}</h2>
        <p>{selecioando.preco}</p>
        <p>{selecioando.id}</p>
        <Link to="/cart" onClick={() => add()}>
          <button>Comprar</button>
        </Link>

        <button onClick={() => add()}>Adicionar ao carrinho</button>
      </div>
    </>
  );
}
