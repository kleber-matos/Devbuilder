import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <S.Section>
      <ul>
        <li>
          <Link to="/novidades">Novidades</Link>
        </li>

        <li>
          <Link to="/acessorios">Acessórios</Link>
        </li>
        <li>
          <Link to="/suplementos">Suplementos</Link>
        </li>

        <li>
          <Link className="none">Marca</Link>
        </li>
      </ul>
    </S.Section>
  );
}
