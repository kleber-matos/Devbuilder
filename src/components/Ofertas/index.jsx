import React from "react";
import * as S from "./styled";

export default function index() {
  return (
    <S.Section>
      <div>
        <h3>Receba ofertas e descontos exclusivos</h3>
        <input type="checkbox" name="termo" id="termo" />
        <label htmlFor="termo">Aceita o termo</label>
      </div>

      <form action="">
        <input type="email" placeholder="Digite seu E-mail" />
        <button>CADASTRAR</button>
      </form>
    </S.Section>
  );
}
