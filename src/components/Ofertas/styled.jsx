import styled from "styled-components";

export const Section = styled.section`
  margin: 20px 50px;
  padding: 20px 50px;
  background-color: #f2f2f2c7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 5px;
  @media (max-width: 850px) {
    width: 100vw;
    margin: 0;
    padding: 0;
    flex-direction: column;
    justify-content: space-evenly;
    height: 30vh;
  }

  label {
    padding-left: 5px;
  }

  form {
    height: 6vh;
    display: flex;
    justify-content: space-between;
    width: 40%;
    max-width: 500px;

    @media (max-width: 850px) {
      flex-direction: column;
      justify-content: space-evenly;
      width: 90vw;
      height: 15vh;
    }

    input {
      border: none;
      outline: none;
      padding-left: 10px;
      border: solid gainsboro;
      border-radius: 4px;
      width: 63%;
      @media (max-width: 850px) {
        width: 100%;
        height: 7vh;
      }
    }

    button {
      padding: 0 10px 0 10px;
      background-color: transparent;
      border: #e20001 solid 3px;
      border-radius: 3px;
      color: #e20001;
      font-size: 13px;
      font-weight: 600;
      width: 35%;
      cursor: pointer;
      @media (max-width: 850px) {
        width: 100%;
        height: 6vh;
      }

      &:hover {
        background-color: #e20001;
        color: white;
        transition: 0.3s;
      }
    }
  }
`;
