import React from "react";
import Run from "../../assets/run.png";
import * as S from "./styled.jsx";

export default function index() {
  return (
    <S.Section>
      <div>
        <img src={Run} alt="Imagem ilustrativa - corrida" />
        <div className="textbox">
          <h2>
            Devbuilder: A academia perfeita para quem quer fortalecer não só o
            código, mas também os músculos!
            <br />
            #FortaleçaSeuCorpoESeuCódigo
          </h2>
        </div>
      </div>
    </S.Section>
  );
}
