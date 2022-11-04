import styled from "styled-components";

export const Main = styled.main`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  height: 90vh;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.375rem;
  line-height: 1.5rem;

  background: var(--main-color4);

  @media screen and (min-width: 768px) {
    justify-content: space-evenly;
  }

  img {
    width: 0vw;

    @media screen and (min-width: 768px) {
      width: 30vw;
    }
  }

  .formSection {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 75vw;

    color: var(--white);

    @media screen and (min-width: 768px) {
      width: 30vw;
    }

    .title {
      margin-bottom: 0.625rem;

      font-size: 1.38rem;
      line-height: 1.5rem;
      text-align: center;

      @media screen and (min-width: 768px) {
        margin-bottom: 1.56rem;

        font-size: 1.63rem;
        line-height: 1.75rem;
      }
    }

    .subtitle {
      font-size: 0.75rem;
      line-height: 0.75rem;
      text-align: center;
    }

    @media screen and (min-width: 768px) {
      font-size: 0.875rem;
      line-height: 1rem;
    }
  }
`;