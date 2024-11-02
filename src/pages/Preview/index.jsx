import * as S from "./styled";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Store } from "react-notifications-component";
import { FaUser } from "react-icons/fa";

import Data from "../../data/data.json";
import Categoria from "../../components/Categorias";
import { CartContext } from "../../Context/CartContext";

export default function index() {
  const { id } = useParams();
  const selecioando = Data.find((e) => e.id == id);
  const { produto, setProduto } = useContext(CartContext);

  const add = () => {
    setProduto(produto.concat(selecioando));

    Store.addNotification({
      title: "Sucesso!",
      message: "Adicionado ao carrinho",
      type: "success",
      insert: "top",
      container: "top-right",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1000,
        onScreen: true,
      },
    });
  };

  return (
    <S.Container>
      <ReactNotifications />
      <Categoria />

      <S.Section>
        <S.Produto>
          <div className="box">
            <img src={selecioando.imagem} alt="" />

            <div>
              <h2>{selecioando.name}</h2>
              <p>R$ {selecioando.preco.toFixed(2).replace(".", ",")}</p>
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

      <S.Comentarios>
        <div className="box">
          <h2>Comentarios</h2>

          <ul>
            <li>
              <div className="user">
                <FaUser />
                <p>Anônimo</p>
              </div>
              <p> - Recomendo!!! </p>
            </li>
            <li>
              <div className="user">
                <FaUser />
                <p>Calos M J.Olavio</p>
              </div>
              <p> - Muito Bom. </p>
            </li>
            <li>
              <div className="user">
                <FaUser />
                <p>Maria Freitas</p>
              </div>
              <p> - Chegou super rápido no meu endereço </p>
            </li>
          </ul>
        </div>
      </S.Comentarios>
    </S.Container>
  );
}
