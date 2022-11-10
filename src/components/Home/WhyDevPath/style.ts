import styled from "styled-components";

export const DivText = styled.div`
  h2 {
    font-size: 1.4rem;
    text-align: center;
    margin: 20px;
    margin-top: 50px;
  }

  @media (min-width: 767px) {
    h2 {
      text-align: left;
      margin-bottom: 50px;
    }
  }
`;

export const Section = styled.section`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (min-width: 767px) {
    padding-bottom: 50px;
    flex-direction: row;
    gap: 50px;
  }

  div {
    background-color: #c2c9e32b;
    width: 280px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    border-radius: 6px;
  }

  /* @media (min-width: 767px) {
    div {
      width: 320px;
    }
  } */

  img {
    width: 100px;
    height: 100px;
  }

  h3 {
    font-size: 1.5rem;
    text-align: center;
  }

  p {
    font-size: 1.15rem;
    padding: 10px;
    text-align: left;
  }
`;
