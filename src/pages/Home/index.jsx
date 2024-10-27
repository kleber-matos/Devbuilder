import Data from "../../data/data.json";
import { Link } from "react-router-dom";
import Categorias from "../../components/Categorias";
import Banner from "../../components/Banner";

export default function index() {
  return (
    <>
      <Categorias />
      <Banner />
      <div>
        {Data.map((e, id) => (
          <div key={id} className="card">
            <h2>{e.name}</h2>
            <p>{e.preco}</p>
            <p>{e.id}</p>
            <Link to={`preview/${e.id}`}>
              <button>Ver</button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
