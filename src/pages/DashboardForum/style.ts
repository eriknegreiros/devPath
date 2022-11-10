import styled from "styled-components";

export const Container = styled.main`
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;

  max-width: 1600px;
  min-height: 100vh;

  img {
    max-width: 12.5rem;
    width: 100%;
    height: 9.688rem;

    object-fit: cover;
    border-radius: 50%;
  }

  @media (min-width: 767px) {
    flex-direction: row;
  }

  section {
    width: 95%;
    gap: 30px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-weight: 700;
    font-size: 1.25rem;
  }

  h3 {
    font-weight: 400;
    font-size: 1rem;
  }

  span {
    font-size: 1rem;
    font-weight: 700;
  }

  form {
    display: flex;
    height: 150px;
    max-width: 420px;
    width: 100%;
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

    width: 100%;
    max-width: 1100px;
  }
`;

export const DivUser = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;

  @media (min-width: 767px) {
    width: 250px;
    height: 200px;
    justify-content: flex-start;
    align-items: flex-start;
    margin: 0 20px;
    text-align: center;
  }
  div {
    width: 100%;
  }
`;

export const DivButton = styled.div`
  position: absolute;
  bottom: 1px;
  right: 10px;
`;
