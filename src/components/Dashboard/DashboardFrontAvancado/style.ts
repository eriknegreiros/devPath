import styled from "styled-components";

export const UlStyledAvancado = styled.ul`
  margin-top: 150px;
  height: 90vh;

  .cardAjuste {
    margin: 80px 0 50px 60%;
  }

  @media (max-width: 540px) {
    .cardAjuste {
      margin: 50px 0 70px 72%;
    }
  }

  @media (max-width: 350px) {
    height: 80vh;
    margin-top: 0px;
  }
`;
