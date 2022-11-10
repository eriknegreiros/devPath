import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  padding: 1rem;

  background-color: var(--main-color4);
  border-bottom: 1px solid var(--main-color2);

  .backpage {
    font-family: "Inter";
    font-size: 1rem;
    color: var(--white);
  }

  .backpage:hover {
    color: var(--main-color5);
    transition: 1s;
  }

  .containerHeader {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      gap: 2rem;
      display: flex;
      align-items: center;
    }
  }

  @media (min-width: 767px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
  }

  h1 {
    font-size: 1.5rem;
    font-family: var(--font);
  }
`;
