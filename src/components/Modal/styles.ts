import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;
  z-index: 999999;
  position: absolute;
  top: 0;
  left: 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: var(--white);
  background: var(--main-color4);
`;

export const Header = styled.header`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 10vh;
  padding: 10px 30px;

  font-weight: 800;
  font-size: 22px;
  line-height: 26px;

  border-bottom: solid 1px var(--main-color2);

  h2 {
    font-size: 30px;
    line-height: 30px;

    @media screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 24px;
    }
  }

  span {
    cursor: pointer;
  }

  .butonsSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    min-width: 20vw;
  }

  /* .done {
    box-sizing: border-box;

    padding: 7px 2px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    text-align: center;

    border: solid 1px #22ca47;
    border-radius: 8px;

    color: var(--white);
    background: #22ca47;
  } */

  .close {
    box-sizing: border-box;

    padding: 3px 10px;

    border: none;

    color: var(--white);
    background: transparent;
  }
`;

export const Main = styled.main`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;

  height: 90vh;
  width: 100%;
  /*padding: 10px 0px;
  gap: 30px; */

  section {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: auto;
    /* margin-bottom: 20px; */
    border-bottom: solid 1px var(--main-color2);

    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
  }

  .contentType {
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 2vw;

    width: 140px;
    padding: 5px 0px;

    @media screen and (max-width: 768px) {
      justify-content: center;

      width: 100vw;
    }

    h2 {
      font-size: 22px;

      @media screen and (max-width: 768px) {
        font-size: 20px;
      }
    }
  }

  .divIcons {
    width: 40px;
  }

  .contentFont {
    width: 40vw;

    @media screen and (max-width: 768px) {
      justify-content: center;
      width: 70vw;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 7px;

      padding: 15px 0px;

      @media screen and (max-width: 768px) {
        align-items: center;

        padding-top: 0px;
      }
    }

    li {
      font-size: 18px;
      line-height: 20px;
    }
  }
`;
