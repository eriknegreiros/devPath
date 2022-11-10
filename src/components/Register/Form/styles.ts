import styled from "styled-components";

const FormStyles = styled.form`
  box-sizing: border-box;

  display: flex;
  flex-direction: column;

  height: auto;
  width: 80%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.25rem;

  color: var(--white);

  .eye{
    background-color: transparent;
    
    border: none;
    display: flex;
  }

  label {
    font-weight: 600;
    font-size: 0.875rem;
    line-height: 1rem;

    margin: 0.9375rem 0 0.1875rem 0;
  }

  input {
    height: 1.8rem;
    width: 80%;
    margin: 0.3125rem 0;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.375rem;

    border: none;

    color: var(--main-color4);
    background: transparent;

    &::placeholder {
      color: var(--main-color7);
    }

    &:focus {
      box-shadow: 0 0 0 0;
      border: 0 none;
      outline: 0;
    }

    @media screen and (min-width: 768px) {
      height: 1.8rem;
    }
  }

  .error {
    font-weight: 600;
    font-size: 0.8rem;
    line-height: 1rem;
    text-align: left;
    margin-top: 1px;

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
    font-weight: 500;
    font-size: 1rem;
    line-height: 1.375rem;

    border: solid 0.0625rem var(--main-color5);
    border-radius: 0.25rem;

    color: var(--main-color6);
    background: var(--main-color5);

    &:focus-within {
      border: solid 0.0625rem var(--main-color3);
    }
  }

  #appearanceSelect {
    box-sizing: border-box;

    height: 2.625rem;
    width: 100%;
    margin: 0 1rem;

    color: var(--main-color4);

    &:focus {
      box-shadow: 0 0 0 0;
      border: solid 0.0625rem transparent;
      outline: 0;
    }

    @media screen and (min-width: 768px) {
      height: 2.4rem;
    }
  }

  button {
    width: auto;
    height: 2.875rem;
    margin-top: 1.625rem;

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 1.25rem;
    line-height: 1.375rem;
    text-align: center;

    border: 0.0625rem solid var(--text-color5);
    border-radius: 0.625rem;

    color: var(--text-color5);
    background: var(--main-color);

    &:hover {
      background: var(--main-color2);
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.4;
    }
  }

  &:active {
    background: var(--main-color6);
  }

    @media screen and (min-width: 768px) {
      height: 4;

    }
`;

export default FormStyles;
