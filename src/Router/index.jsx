import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "../components/Header/index";
import Preview from "../pages/Preview";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Novidades from "../pages/Novidades";
import Suplementos from "../pages/Suplementos";
import Acessorios from "../pages/Acessorios";
import Busca from "../pages/Busca";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />

          <Route path="/novidades" element={<Novidades />} />
          <Route path="/novidades/preview/:id" element={<Preview />} />

          <Route path="/suplementos" element={<Suplementos />} />
          <Route path="/suplementos/preview/:id" element={<Preview />} />

          <Route path="/acessorios" element={<Acessorios />} />
          <Route path="/acessorios/preview/:id" element={<Preview />} />

          <Route path="/busca" element={<Busca />} />
          <Route path="/busca/preview/:id" element={<Preview />} />

          <Route path="/preview/:id" element={<Preview />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}
