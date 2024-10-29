import React, { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import { FaTrash } from "react-icons/fa";

import * as S from "./styled";

export default function index() {
  const { produto, setProduto } = useContext(CartContext);

  const removerItem = (id) => {
    const filtrado = produto.filter((e) => e.id !== id);
    setProduto(filtrado);
  };

  return (
    <>
      <S.Container>
        <div>
          {produto.map((e, id) => (
            <S.Produto key={id}>
              <img src={e.imagem} alt={e.name} />
              <div>
                <h2>{e.name}</h2>
                <span>R$ {e.preco.toFixed(2).replace(".", ",")}</span>
              </div>

              <button onClick={() => removerItem(e.id)}>
                <FaTrash />
              </button>
            </S.Produto>
          ))}
        </div>
        <S.BoxTotal>
          <S.Item>
            <h2>{produto.length > 1 ? `Itens` : `Item`}</h2>
            <h2>{produto.length}</h2>
          </S.Item>

          <S.Preco>
            <h2>Valor total</h2>
            <span>
              {produto
                .reduce((valor, item) => valor + item.preco, 0)
                .toFixed(2)
                .replace(".", ",")}
            </span>
          </S.Preco>

          <button>FINALIZAR</button>
        </S.BoxTotal>
      </S.Container>

      <hr />
      <h2>Valor total</h2>
      <span>
        {produto
          .reduce((valor, item) => valor + item.preco, 0)
          .toFixed(2)
          .replace(".", ",")}
      </span>
      <p>
        Confira as promoções e brindes no seu carrinho! As promoções e brindes
        serão aplicados levando em conta o valor líquido do carrinho,
        considerando todos os descontos aplicados, inclusive com os meios de
        pagamento.
      </p>
    </>
  );
}
