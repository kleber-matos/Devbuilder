import styled from "styled-components";

export const Produto = styled.div`
  /* border: solid; */
  display: flex;

  padding: 20px;
  border-radius: 10px;
  justify-content: space-between;
  align-items: center;
  width: 60vw;
  max-width: 900px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  img {
    width: 10vw;
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
`;

export const Item = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  border-bottom: solid gainsboro;
  padding-bottom: 20px;
`;

export const BoxTotal = styled.div`
  width: 30vw;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  max-width: 500px;
  height: 30vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  border-radius: 10px;

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

export const Preco = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
