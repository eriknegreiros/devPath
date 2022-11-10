import styled from "styled-components";

const DivInput = styled.section`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: solid 2px var(--main-color6);

  padding-left: 10px;
  background-color: #c2c9e3;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    border: none;
    height: 100%;
    font-size: 1rem;
    font-family: var(--font);
    background-color: #c2c9e3;
    outline: none;
    font-family: var(--font);
  }
  button {
    display: flex;
    border: none;
    background-color: none;
    background-color: transparent;
  }
`;
export default DivInput;
