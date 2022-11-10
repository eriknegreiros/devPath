import styled from "styled-components";

export const RegisterPost = styled.div`
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

  main {
    width: 30%;
    min-width: 320px;
    height: 350px;
    background-color: var(--main-color);
    border-radius: 4px;
    gap: 16px;

    display: flex;
    flex-direction: column;
  }

  h2 {
    color: white;
    font-size: var(--text-size2);
    display: flex;
    margin: 10px auto;
  }

  .modalForm {
    display: flex;
    flex-direction: column;
    background-color: var(--main-color);
    border: none;
    gap: 10px;
    width: 80%;
    height: 100%;
    margin: 15px auto;
  }
  textarea {
    font-family: "Inter";
    color: black;
    height: 200px;
    max-width: 100%;
    font-size: var(--text-size4);
    border-radius: 4px;
    padding: 4px;
  }
  div {
    display: flex;
    height: 40px;
    width: 100%;
    align-items: center;
    font-size: 14px;
    font-weight: 700;
    gap: 5px;

    .edit {
      color: white;
      border: none;
      background-color: var(--positive-color);
      width: 49%;
    }
    .cancel {
      background-color: var(--negative-color);
      width: 49%;
    }
  }
`;
