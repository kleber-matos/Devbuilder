import styled from "styled-components";

export const Produtos = styled.section`
  display: flex;
  justify-content: center;
  padding: 20px 50px;
  /* border: solid; */
  min-height: 65vh;
  @media (max-width: 850px) {
    padding: 20px 10px;
  }

  .box {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;
