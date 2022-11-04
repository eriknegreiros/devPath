import styled from "styled-components";

export const HeaderStyles = styled.header`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 10vh;
  padding: 1.56rem;

  background: var(--main-color4);
  border-bottom: 0.0625rem solid var(--main-color2);

  @media screen and (min-width: 768px) {
    padding: 1.875rem 6.25rem;
  }

  img {
    width: 6.25rem;

    @media screen and (min-width: 768px) {
      width: 9.375rem;
    }
  }

  .buttonsHeader {
    display: flex;
    gap: 3vw;

    width: fit-content;

    text-align: center;

    @media screen and (min-width: 768px) {
      gap: 7vw;
    }

    .link,
    .namePage {
      width: min-content;
      padding: 1vh 2vw ;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 1rem;
      line-height: 1.125rem;
      text-align: center;

      text-decoration: none;
      border: 0.0625rem solid transparent;
      border-radius: 0.5rem;

      color: var(--white);
      background: var(--main-color2);

      &:hover {
        border: 0.0625rem solid var(--white);

        cursor: pointer;
      }
    }

    .namePage {
      border: 0.0625rem solid var(--white) !important;

      &:hover {
        cursor: auto !important;
      }
    }
  }
`;
