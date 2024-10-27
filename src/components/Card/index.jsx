import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";

export default function index({ imagem, name, id }) {
  return (
    <S.Div>
      <Link to={`preview/${id}`}>
        <img src={imagem} alt={name} />
        <h2>{name}</h2>
        <button>Saiba Mais</button>
      </Link>
    </S.Div>
  );
}
