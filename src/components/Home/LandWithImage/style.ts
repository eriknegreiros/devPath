import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--main-color2);
  height: 87vh;

  @media (min-width: 768px) {
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  img {
    width: 250px;
    height: 250px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
  }

  h2 {
    text-align: center;
    font-size: 1.25rem;
    font-family: var(--font);
    margin-left: 5px;
    margin-right: 5px;
  }
  p {
    text-align: center;
    font-family: var(--font);
    font-size: 0.9rem;
    margin: 10px;
  }

  button {
    text-align: center;
    font-family: var(--font);
    font-size: 1rem;
    width: 200px;
    height: 40px;
    background-color: var(--main-color);
    color: var(--text-color5);
    border: 1px solid var(--white);
    border-radius: 8px;
  }

  button:hover {
    background-color: var(--main-color2);
    transition: 2.5s;
  }

  @media (min-width: 768px) {
    img {
      width: 400px;
      height: 400px;
      margin-right: 35px;
    }

    div {
      align-items: flex-start;
      margin-left: 50px;
      gap: 40px;
    }

    h2 {
      width: 40vw;
      font-size: 1.8rem;
      text-align: left;
    }

    p {
      width: 30vw;
      font-size: 1.2rem;
      text-align: left;
    }

    button {
      height: 50px;
      width: 280px;
    }

    @media (min-width: 1000px) {
      img {
        width: 500px;
        height: 500px;
      }
    }
  }
`;
