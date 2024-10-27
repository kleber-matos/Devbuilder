import React, { useContext } from "react";
import * as S from "./styled";
import Header from "../../components/Header";
import Categorias from "../../components/Categorias";
import Card from "../../components/Card";
import Data from "../../data/data.json";
import Footer from "../../components/Footer";
import Aviso from "../../components/Aviso";

import { CartContext } from "../../Context/CartContext";

export default function index() {
  const { busca } = useContext(CartContext);

  const searchFilter = Data.filter((item) =>
    item.description.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <Categorias />

      {searchFilter == "" ? (
        <Aviso sobre={"Produto não encontrado..."} />
      ) : (
        <S.Text>
          <h2>Ofertas do dia!</h2>
        </S.Text>
      )}

      <S.Produtos>
        <div className="box">
          {searchFilter.map((e, id) => (
            <Card key={id} name={e.name} imagem={e.imagem} id={e.id} />
          ))}
        </div>
      </S.Produtos>

      <Footer />
    </>
  );
}
