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
  font-size: 20px;
  line-height: 24px;

  color: #ffffff;

  label {
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;

    margin: 20px 0 8px 0;
  }

  input {
    height: 50px;
    width: 80%;
    margin: 5px 0;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    border: none;

    color: #000610;
    background: transparent;

    &::placeholder {
      color: #a6a8aa;
    }
  }

  p {
    font-weight: 500;
    font-size: 15px;
    line-height: 20px;
    text-align: left !important;


    color: red;
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
    font-size: 20px;
    line-height: 24px;

    border-radius: 4px;

    color: rgba(5, 24, 102, 0.54);
    background: #c2c9e3;
  }

  select {
    height: 60px;
    padding: 0 10px;

    border: none;

    color: #000610;
  }

  button {
    width: auto;
    height: 50px;
    margin-top: 30px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 30px;
    text-align: center;

    border: 1px solid #ffffff;
    border-radius: 10px;

    color: #ffffff;
    background: #010a26;

    &:hover {
      background: #000610;
    }

    &:active {
      background: #051866;
    }
  }
`;

export default FormStyles;
