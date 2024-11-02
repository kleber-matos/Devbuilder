import React from "react";
import * as S from "./styled";
import Header from "../../components/Header";
import Categorias from "../../components/Categorias";
import Card from "../../components/Card";
import Data from "../../data/data.json";
import Footer from "../../components/Footer";

export default function index() {
  const destaques = Data.filter((e) => e.categoria == "novidades");
  return (
    <>
      <Categorias />
      <S.Produtos>
        <div className="box">
          {destaques.map((e, id) => (
            <Card key={id} name={e.name} imagem={e.imagem} id={e.id} />
          ))}
        </div>
      </S.Produtos>
    </>
  );
}
