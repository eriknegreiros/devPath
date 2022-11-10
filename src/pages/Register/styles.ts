import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  justify-content: center;

  background: var(--main-color4);

  @media screen and (min-width: 767px) {
    justify-content: space-evenly;
  }

  img {
    display: none;

    @media screen and (min-width: 850px) {
      width: 500px;
      display: inline;
      margin-top: 5vh;
    }
  }

  .formSection {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 75vw;

    color: var(--white);

    max-width: 500px;

    .title {
      margin-bottom: 0.625rem;
      margin-top: 5vh;
      font-size: 1.2rem;
      line-height: 1.5rem;
      text-align: center;

      @media screen and (min-width: 767px) {
        
        margin-top: 20px;
        font-size: 1.5rem;
        line-height: 1.75rem;
      }
    }

    .subtitle {
      font-size: 0.75rem;
      line-height: 0.75rem;
      text-align: center;
    }

    @media screen and (min-width: 767px) {
      font-size: 0.875rem;
      line-height: 1rem;
    }
  }
`;
