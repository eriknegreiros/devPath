import styled from "styled-components";

export const RegisterTech = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  width: 100%;
  height: 110%;
  background-color: rgba(0, 0, 0, 0.4);

  div {
    box-sizing: border-box;
    border-radius: 4px 4px 0 0;
    padding: 8px;
    display: flex;
    justify-content: space-between;
    height: 36px;
    width: 100%;
    align-items: center;
    background-color: var(--grey-2);
    color: var(--grey-0);
    font-size: 14px;
    font-weight: 700;
    button {
      background-color: transparent;
      color: white;
      border: none;
      &:hover {
        color: var(--negative-color);
      }
    }
  }

  h2 {
    color: white;
    font-size: var(--text-size4);
  }
  main {
    width: 40%;
    min-width: 320px;
    height: 350px;
    background-color: var(--main-color);
    border-radius: 4px;
    gap: 16px;

    display: flex;
    flex-direction: column;
  }
  form {
    color: black;
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 80%;
    height: 100%;
    margin: 15px auto;
  }
  textarea {
    font-family: "Inter";
    color: black;
    height: 200px;
    width: 100%;

    font-size: var(--text-size4);
    color: black;
    border-radius: 4px;
    padding: 4px;
  }
`;
