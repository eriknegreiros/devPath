import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100vw;
  justify-content: center;
  
  text-align: center;
  gap: 30px;
  max-width: 1600px;
  min-height: 100vh;

  @media (min-width: 767px) {
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
    max-width: 420px;
    margin: 0 auto;
    background: #ffffff;
    border: 5px solid #051866;
    border-radius: 8px;
    padding: 8px;
    position: relative;
  }

  textarea {
    font-family: "Inter";
    width: 24rem;
    border: transparent;
    font-style: normal;
    height: 6rem;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    color: #a2a2a2;
    padding: 10px;
    resize: none;
  }

  button {
    font-family: "Inter";
    font-size: 1rem;
    border: transparent;
    background: var(--main-color3);
    border-radius: 10px;
    color: var(--white);
    padding: 5px;
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

  @media (min-width: 767px) {
    width: 250px;
    height: 200px;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 20px;
  }
`;

export const DivButton = styled.div`
  position: absolute;
  bottom: 1px;
  right: 10px;
`;
