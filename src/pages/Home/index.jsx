import Data from "../../data/data.json";
import { Link } from "react-router-dom";
import Categorias from "../../components/Categorias";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import Ofertas from "../../components/Ofertas";
import * as S from "./styled";
import Footer from "../../components/Footer";

export default function index() {
  const destaques = Data.filter((e) => e.categoria == "destaque");

  return (
    <>
      <Categorias />
      <Banner />
      <S.Produtos>
        <div className="box">
          {destaques.map((e, id) => (
            <Card key={id} name={e.name} imagem={e.imagem} id={e.id} />
          ))}
        </div>
      </S.Produtos>

      <Ofertas />
    </>
  );
}
