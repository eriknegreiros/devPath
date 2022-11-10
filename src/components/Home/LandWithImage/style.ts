import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid var(--main-color2);
  height: 90vh;
  

  @media (min-width: 767px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    height: 90.1vh;
  }

  img {
    width: 250px;
    height: 250px;
  }

  @media (min-width: 500px) {
    div {
      width: 100%;
    }
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
    margin-left: 10px;
    margin-right: 5px;
  }
  p {
    text-align: center;
    font-family: var(--font);
    font-size: 0.9rem;
    margin: 10px;
  }

  a {
    width: 200px;
    height: 40px;

    text-decoration: none;
    text-align: center;
    font-size: 1rem;

    padding-top: 8px;
    border-radius: 8px;

    font-family: var(--font);
    color: var(--text-color5);
    border: 1px solid var(--white);
    background-color: var(--main-color);
  }

  a:hover {
    background-color: var(--main-color2);
    transition: 2.5s;
  }

  @media (min-width: 767px) {
    img {
      width: 400px;
      height: 400px;
      margin-right: 35px;
    }

    div {
      align-items: flex-start;
      margin-left: 1.4vw;
      gap: 40px;
      margin-left: 4.5vw;
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
