import styled from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  
  text-align: center;
  gap: 30px;
  padding: 15px;

  a {
    color: white;
    text-decoration: none;
  }
  
  @media (min-width: 768px) {
    flex-direction: row;
  }

  section {
    gap: 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h4 {
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
  }

  h5 {
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 29px;
  }

  form {
    display: flex;
    height: 150px;
    width: 420px;
    margin: 0 auto;
    background: #ffffff;
    border: 5px solid #051866;
    border-radius: 8px;
    padding: 8px;
  }

  textarea {
    font-family: "Inter";
    width: 390px;
    border: transparent;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;
    color: #a2a2a2;
    padding: 10px;
  }

  button {
    font-family: "Inter";
    float: bottom;
    font-size: 20px;
    border: transparent;
    background: #22ca47;
    border-radius: 10px;
    color: #ffffff;
    padding: 5px;
    align-items: center;
    height: 30px;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const DivUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  padding: 15px;

  @media (min-width: 768px) {
    width: 250px;
    height: 200px;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 20px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  border: transparent;
  align-items: flex-end;
`;
