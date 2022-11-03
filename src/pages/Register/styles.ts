import styled from "styled-components";

export const Header = styled.header`
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 40px 25px;

  background: var(--main-color);
  border-bottom: 1px solid var(--main-color2);

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
      font-size: var(--text-size5);
      line-height: 18px;
      text-align: center;

      border: 1px solid transparent;
      border-radius: 8px;

      color: var(--text-color5);
      background: var(--main-color2);

      &:hover {
        border: 1px solid var(--text-color5);
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
  font-size: var(--text-size2);
  line-height: 24px;

  background: var(--main-color);

  .form-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 80%;
    margin-top: 40px;

    h3 {
      margin-bottom: 30px;

      font-size: var(--text-size);
      line-height: 28px;
      text-align: center;
    }

    p {
      font-size: var(--text-size4);
      line-height: 16px;
      text-align: center;
    }
  }
`;
