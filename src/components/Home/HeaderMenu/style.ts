import styled from "styled-components";

export const Header = styled.header`
  height: 85px;
  background-color: var(--main-color4);
  width: 100vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border-bottom: 1px solid var(--main-color2);


  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    h1 {
      margin-left: 50px;
    }
  }

  h1 {
    font-size: 2rem;
    font-family: var(--font);
  }

  li {
    display: flex;
    align-items: center;
    gap: 5vw;
    margin-left: 5px;
    margin-right: 5px;
  }

  a{
    color: white;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    li {
      margin-right: 50px;

    }
  }

  p {
    font-size: 0.9rem;
    text-align: center;
    font-family: var(--font);
    font-weight: 200;
    cursor: pointer;
  }

  p:hover{
    color: var(--main-color3);
    transition: 2.5s;
  }
`;
