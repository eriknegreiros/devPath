import styled from "styled-components";

const InputContainer = styled.div`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: none;

  padding-left: 10px;
  background-color: #c2c9e3;
  display: flex;
  align-items: center;

  

  input {
    width: 100%;
    border: none;
    height: 100%;
    background-color: #c2c9e3;
    font-size: 1rem;
    outline: none;
    font-family: var(--font);
  }
  button {
    display: flex;
    cursor: auto;
    border: none;
    background-color: none;
    background-color: transparent;
  }
`;
export default InputContainer;
