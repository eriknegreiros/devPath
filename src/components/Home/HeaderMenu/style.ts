import styled from "styled-components";
import { FaBars } from "react-icons/fa";

export const Header = styled.header`
  width: 100vw;
  height: 60px;
  align-items: center;
  background-color: var(--main-color4);
  border-bottom: 1px solid var(--main-color2);

  .containerHeader {
    width: 100vw;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  nav {
    .toggle {
      display: block;
    }
  }

  @media (min-width: 767px) {
    justify-content: center;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;

    h1 {
      margin-left: 50px;
    }
  }

  h1 {
    font-size: 1.5rem;
    font-family: var(--font);
    margin-left: 35px;
  }

  .navigation-menu li {
    display: block;
    align-items: center;
    margin-left: 30px;
  }

  a {
    color: white;
    text-decoration: none;
  }

  @media (min-width: 768px) {
    li {
      display: flex;
      color: #000;
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

  p:hover {
    color: var(--main-color3);
    transition: 2.5s;
  }
`;

export const Bars = styled(FaBars)`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: none;

  &.expanded {
    display: flex;
    align-items: center;
    padding-top: 25px;

    width: 100%;
    height: calc(100vh - 77px);
    background-color: var(--main-color4);

    position: absolute;
    top: 60px;
    left: 0;
    flex-direction: column;
    gap: 3rem;
  }

  @media screen and (min-width: 767px) {
    display: flex;
    gap: 1rem;
  }
`;
