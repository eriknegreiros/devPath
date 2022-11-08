import styled from "styled-components";

export const Modal = styled.div`
  width: 100vw;
  height: 100vh;

  position: absolute;
  top: 0;
  left: 0;

  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #fff;
  background: #000610;
`;

export const Header = styled.header`
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  height: 8vh;
  padding: 10px 30px;

  font-weight: 800;
  font-size: 22px;
  line-height: 26px;

  .butonsSection {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    min-width: 20vw;
  }

  .done {
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
  }

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

  height: 92vh;
  width: 100%;
  padding: 10px 0px;

  section {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    gap: 3vw;

    width: 100%;
    height: auto;

    border-bottom: solid 1px #051866;
  }

  .contentType {
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 5px;

    width: 140px;
    padding: 5px 0px;

    h2{
      font-size: 22px;
    }
  }

  .divIcons {
    width: 40px;
  }

  .contentFont {
    width: 40vw;
  }
`;
