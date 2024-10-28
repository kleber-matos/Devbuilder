import styled from "styled-components";

export const Section = styled.section`
  /* padding: 20px 50px; */
`;

export const Produto = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: solid; */
  margin-top: 50px;

  .box {
    border-bottom: solid #ececec 2px;
    width: 80%;
    max-width: 800px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;

    div {
      /* border: solid; */
      height: 20vh;
      width: 40%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

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

    img {
      width: 300px;
    }
  }
`;

export const Descricao = styled.div`
  /* border: solid; */
  display: flex;
  justify-content: center;

  div {
    /* border: solid; */
    width: 80%;
    max-width: 800px;
  }

  h2,
  p {
    margin-top: 15px;
  }
`;

export const Comentarios = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  .box {
    /* border: solid red; */
    width: 80%;
    max-width: 800px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    padding: 10px;
    border-radius: 5px;
  }

  li {
    margin: 10px 0 10px 0;
  }

  .user {
    display: flex;
    align-items: center;

    p {
      margin-left: 5px;
    }
  }
`;
