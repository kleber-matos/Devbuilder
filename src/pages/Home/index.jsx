import Data from "../../data/data.json";
import { Link } from "react-router-dom";
import Categorias from "../../components/Categorias";
import Banner from "../../components/Banner";
import Card from "../../components/Card";
import * as S from "./styled";

export default function index() {
  return (
    <>
      <Categorias />
      <Banner />
      <S.Produtos>
        <div className="box">
          {Data.map((e, id) => (
            <Card key={id} name={e.name} imagem={e.imagem} id={e.id} />
          ))}
        </div>
      </S.Produtos>
    </>
  );
}
