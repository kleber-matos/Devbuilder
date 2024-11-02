import styled from "styled-components";

export const Produto = styled.div`
  /* border: solid; */
  display: flex;

  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  max-width: 900px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (max-width: 850px) {
    width: 100vw;
    max-width: 500px;
  }

  h2 {
    font-size: 16px;
    margin-bottom: 10px;

    text-align: center;
  }

  img {
    width: 10vw;
    max-width: 100px;
  }

  button {
    background-color: transparent;
    border: none;
    font-size: 30px;
    cursor: pointer;

    &:hover {
      color: #444444fd;
    }
  }
`;

export const Container = styled.section`
  margin-top: 50px;
  display: flex;
  justify-content: space-evenly;

  min-height: 68vh;

  @media (max-width: 850px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  border-bottom: solid gainsboro;
  padding-bottom: 20px;
`;

export const BoxTotal = styled.div``;

export const Preco = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Box = styled.div`
  width: 100vw;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  max-width: 350px;
  height: 30vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;

  @media (max-width: 850px) {
    max-width: 500px;
  }

  button {
    background-color: transparent;
    border: #e20001 solid 3px;
    border-radius: 3px;
    color: #e20001;
    font-size: 18px;
    font-weight: 600;
    width: 100%;
    height: 5vh;
    cursor: pointer;

    &:hover {
      background-color: #e20001;
      color: white;
      transition: 0.3s;
    }
  }
`;

export const Seguro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 30px;

  svg {
    color: #3cb63c;
    width: 25px;
    height: 25px;
    margin-right: 5px;
  }
`;

export const BoxItens = styled.div`
  /* border: solid; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 40vh;

  @media (max-width: 850px) {
    align-items: center;
  }

  p {
    width: 90%;
    max-width: 1000px;
    text-align: center;
    margin-bottom: 30px;
  }
`;
