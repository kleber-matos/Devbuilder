import React, { useContext } from "react";
import Data from "../../data/data.json";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Categoria from "../../components/Categorias";
import * as S from "./styled";

export default function index() {
  const { id } = useParams();
  const selecioando = Data.find((e) => e.id == id);

  const { produto, setProduto } = useContext(CartContext);

  const add = () => {
    setProduto(produto.concat(selecioando));
  };

  return (
    <>
      <Categoria />

      <S.Section>
        <S.Produto>
          <div className="box">
            <img src={selecioando.imagem} alt="" />

            <div>
              <h2>{selecioando.name}</h2>
              <p>R$ {selecioando.preco}</p>
              <button onClick={() => add()}>COMPRAR</button>
            </div>
          </div>
        </S.Produto>

        <S.Descricao>
          <div>
            <h2>Descrição</h2>
            <p>{selecioando.description}</p>
          </div>
        </S.Descricao>
      </S.Section>
    </>
  );
}
