import React from "react";
import * as S from "./styled";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function index() {
  return (
    <S.Footer>
      <section>
        <h2>Contatos</h2>
        <div>
          <FaInstagram />
          <FaFacebook />
          <FaLinkedin />
        </div>
      </section>
    </S.Footer>
  );
}
