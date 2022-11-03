import styled from "styled-components";

const DivInput = styled.section`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: solid 2px var(--main-color6);

  padding-left: 10px;
  background-color: white;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    border: none;
    height: 100%;
    font-size: var(--text-size3);
    outline: none;
  }
  button {
    display: flex;
    border: none;
    background-color: none;
    background-color: transparent;
  }
`;
export default DivInput;
