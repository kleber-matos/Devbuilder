import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";

export default function index() {
  const { produto, setProduto } = useContext(CartContext);

  const removerItem = (id) => {
    const filtrado = produto.filter((e) => e.id !== id);
    setProduto(filtrado);
  };

  return (
    <>
      <h2>Carrinho</h2>
      <div>
        <h3>Produtos adicionados</h3>
        {produto.map((e, id) => (
          <div key={id}>
            <h2>{e.name}</h2>
            <p>{e.preco}</p>

            <button onClick={() => removerItem(e.id)}>Remover</button>
          </div>
        ))}

        <hr />
        <h2>Valor total</h2>
        <span>
          {produto.reduce((valor, item) => valor + item.preco, 0).toFixed(2)}
        </span>
      </div>
    </>
  );
}
