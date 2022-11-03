import styled from "styled-components";

const FormStyles = styled.form`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  height: auto;
  max-width: 100%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: var(--text-size2);
  line-height: 24px;

  color: var(--text-color5);

  label {
    font-weight: 600;
    font-size: var(--text-size4);
    line-height: 16px;

    margin: 15px 0 3px 0;
  }

  input {
    height: 50px;
    width: 80%;
    margin: 5px 0;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: var(--text-size3);
    line-height: 24px;

    border: none;

    color: var(--main-color);
    background: transparent;

    &::placeholder {
      color: #a6a8aa;
    }
  }

  .error {
    font-weight: 600;
    font-size: var(--text-size4);
    line-height: 16px;
    text-align: left !important;

    color: var(--negative-color);
  }

  div,
  select {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    height: auto;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: var(--text-size3);
    line-height: 24px;

    border-radius: 4px;

    color: var(--main-color2);
    background: var(--text-color5);
  }

  select {
    height: 60px;
    padding: 0 10px;

    border: none;

    color: var(--text-color);
  }

  button {
    width: auto;
    height: 50px;
    margin-top: 30px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: var(--text-size);
    line-height: 30px;
    text-align: center;

    border: 1px solid var(--text-color5);
    border-radius: 10px;

    color: var(--text-color5);
    background: var(--main-color);

    &:hover {
      background: var(--main-color2);
    }

    &:active {
      background: var(--main-color3);
    }
  }
`;

export default FormStyles;
