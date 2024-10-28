import React, { useContext } from "react";
import { FaUser } from "react-icons/fa";

import Data from "../../data/data.json";
import { Link, useParams } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";
import Categoria from "../../components/Categorias";
import * as S from "./styled";
import Swal from "sweetalert2";

export default function index() {
  const { id } = useParams();
  const selecioando = Data.find((e) => e.id == id);

  const { produto, setProduto } = useContext(CartContext);

  const add = () => {
    setProduto(produto.concat(selecioando));
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Adicionado ao carrinho",
      showConfirmButton: false,
      timer: 1500,
    });
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
    </>
  );
}
