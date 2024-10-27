import styled from "styled-components";

export const Section = styled.section`
  padding: 20px 50px;
  border-bottom: solid gainsboro;

  @media (max-width: 850px) {
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
  }

  ul {
    width: 60%;
    display: flex;
    max-width: 700px;
    justify-content: space-between;

    @media (max-width: 850px) {
      width: 90%;
    }
  }

  li {
    font-family: "Racing Sans One", serif;
    cursor: pointer;
  }
`;
