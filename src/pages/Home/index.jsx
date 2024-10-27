import Data from "../../data/data.json";
import { Link } from "react-router-dom";

export default function index() {
  return (
    <>
      <h1>Home</h1>
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
