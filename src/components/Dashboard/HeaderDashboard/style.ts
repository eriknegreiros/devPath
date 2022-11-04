import styled from "styled-components";

export const Header = styled.header`
  height: 85px;
  background-color: var(--main-color4);
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--main-color2);
  padding: 30px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto;
  }

  h1 {
    font-size: 2rem;
    font-family: var(--font);
  }

  a {
  }
`;