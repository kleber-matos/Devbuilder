import styled from "styled-components";

export const Section = styled.section`
  padding: 30px 50px;
  @media (max-width: 850px) {
    padding: 30px 0px;
  }

  div {
    display: flex;
    align-items: center;
    background-color: #e20001;
  }

  img {
    width: 40%;
    @media (max-width: 850px) {
      height: 20vh;
    }
  }

  .textbox {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
  }

  h2 {
    width: 90%;
    color: white;

    @media (max-width: 850px) {
      font-size: 12px;
    }
  }
`;
