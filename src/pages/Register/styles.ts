import styled from "styled-components";

export const Header = styled.header`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 25px;

  background: #000610;
  border-bottom: 1px solid #051866;

  img {
    width: 150px;
  }

  .buttons-header {
    display: flex;

    text-align: center;

    gap: 30px;

    button {
      width: fit-content;
      padding: 8px 25px;

      font-family: "Inter";
      font-style: normal;
      font-weight: 700;
      font-size: 16px;
      line-height: 19px;
      text-align: center;

      border: none;
      border-radius: 8px;

      color: #ffffff;
      background: #010a26;

      &:hover {
        border: 1px solid #ffffff;
      }
    }
  }
`;

export const Main = styled.main`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 30px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 24px;

  background: #000610;

  .form-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    width: 80%;

    h3 {
      font-size: 36px;
      line-height: 40px;
      text-align: center;
    }

    p {
      font-size: 24px;
      line-height: 28px;
      text-align: center;
    }
  }
`;
