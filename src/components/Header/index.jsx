import * as S from "./styled";
import { Link } from "react-router-dom";
import React, { useState } from "react";

import Logo from "../../assets/Logo.png";

import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { FaSearch, FaShoppingBag, FaHeart } from "react-icons/fa";

const Header = () => {
  //
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.Promo>
        <h3>A Black Friday chegou cedo!</h3>
      </S.Promo>

      <S.Header>
        <S.Container>
          <S.Logo>
            <Link to="/">
              <img src={Logo} alt="Logo marca" />
            </Link>
          </S.Logo>
          <S.ToggleButton onClick={toggleMenu}>
            {isOpen ? <IoClose /> : <FiMenu />}
          </S.ToggleButton>
        </S.Container>

        <S.Menu $isOpen={isOpen}>
          <li className="seach">
            <input type="text" placeholder="Buscar..." />
            <FaSearch className="lupa" />
          </li>
          <li>
            <Link to="/">
              <FaHeart className="icon" />
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingBag className="icon" />
            </Link>
          </li>
        </S.Menu>
      </S.Header>
    </>
  );
};

export default Header;
