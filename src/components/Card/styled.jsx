import styled from "styled-components";

export const Div = styled.div`
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 8px;
  width: 15vw;
  min-width: 330px;
  margin: 10px 0 10px 0;
  padding: 0 5px 0 5px;

  h2 {
    font-weight: 400;
  }

  @media (max-width: 850px) {
    min-width: 49%;
    h2 {
      font-size: 16px;
    }
  }

  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 50vh;
    margin: 20px 0 20px 0;
    color: black;
  }

  button {
    width: 90%;
    height: 4vh;
    font-size: 20px;
    font-weight: 600;
    color: white;
    background-color: #e20001;
    border: none;
    border-radius: 5px;
    @media (max-width: 850px) {
      height: 6vh;
    }
  }

  img {
    width: 80%;
    @media (max-width: 850px) {
      min-width: 30%;
    }
  }
`;
