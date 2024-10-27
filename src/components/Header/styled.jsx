import styled, { css } from "styled-components";

const FlexBox = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  ${FlexBox}
  justify-content: space-between;
  padding: 20px 50px;
  background-color: #e20001;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    padding: 20px 20px;
  }
`;

export const Container = styled.div`
  ${FlexBox}
  justify-content: space-between;
  width: 50%;

  @media (max-width: 850px) {
    width: 100%;
  }
`;

export const Promo = styled.section`
  text-align: center;
  padding: 5px;
  font-size: 14px;
  color: white;
  background-color: #a70a13;

  h3 {
    font-weight: 400;
  }
`;

export const Logo = styled.div`
  @media (max-width: 850px) {
    img {
      width: 40vw;
    }
  }
`;

export const Menu = styled.ul`
  width: 100%;
  max-width: 500px;
  ${FlexBox}
  justify-content: space-between;

  .seach {
    ${FlexBox}
    width: 70%;
    border-radius: 5px;
    background-color: white;
    justify-content: space-between;

    input {
      border: none;
      padding-left: 15px;
      font-weight: 500;
      font-size: 16px;
      outline: none;
      height: 4vh;
      border-radius: 5px;
    }

    .lupa {
      padding-right: 10px;
      font-size: 30px;
    }

    @media (max-width: 850px) {
      width: 100%;
      height: 6vh;
    }
  }

  .icon {
    color: white;
    font-size: 26px;

    @media (max-width: 850px) {
      font-size: 30px;
    }
  }

  @media (max-width: 850px) {
    display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
    height: 36vh;
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }
`;

export const ToggleButton = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 2.5rem;
  ${FlexBox}

  @media (min-width: 851px) {
    display: none;
  }
`;
