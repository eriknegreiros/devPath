import styled from "styled-components";

export const DivText = styled.div`
  h2 {
    font-size: 1.4rem;
    text-align: center;
    margin: 20px;
    margin-top: 50px;
  }

  @media (min-width: 768px) {
    h2 {
      text-align: left;
      margin-left: 50px;
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

  @media (min-width: 768px) {
    flex-direction: row;
    gap: 80px;
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
    margin-top: 60px;
    border-radius: 6px;
  }

  @media (min-width: 768px) {
    div {
      width: 320px;
      margin-bottom: 120px;
    }
  }

  img {
    width: 100px;
    height: 100px;
  }

  h3 {
    font-size: 1.8rem;
    text-align: center;
  }

  p {
    font-size: 1.2rem;
    margin: 10px;
    text-align: left;
  }
`;
