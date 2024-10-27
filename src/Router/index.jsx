import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "../components/Header/index";
import Preview from "../pages/Preview";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

export default function Router() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/preview/:id" element={<Preview />} />
          <Route />
        </Routes>
      </BrowserRouter>
    </>
  );
}
