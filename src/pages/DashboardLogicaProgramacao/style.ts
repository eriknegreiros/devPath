import styled from "styled-components";

export const UlLogicaProgramacao = styled.ul`
  
  height: 90vh;

  .cardLogica {
    width: 33%;
    margin: 95px 0 105px 62%;
  }

  @media (max-width: 540px) {
    margin: 0px 0;
    .cardLogica {
      margin: 95px 0 120px 70%;
    }

    @media (max-width: 465px) {
      .cardLogica {
        margin: 105px 0 100px 73%;
      }
    }

    @media (max-width: 350px) {
      height: 80vh;
      margin-top: 0px;
    }
  }
`;
