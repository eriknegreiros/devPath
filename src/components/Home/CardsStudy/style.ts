import styled from "styled-components";

export const Section = styled.section`
  /* height: 70vh; */
  border-bottom: 1px solid var(--main-color2);

  @media (min-width: 767px) {
   height: 97vh;
  }
`;

export const DivText = styled.div`
  margin: 20px;
  margin-top: 50px;

  h2 {
    font-size: 1.4rem;
    text-align: center;
  }

  @media (min-width: 767px) {
    h2 {
      text-align: left;
      margin-left: 35px;
      margin-bottom: 50px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  height: 78vh;
  align-items: center;
  overflow-x: scroll;
  gap: 40px;
  margin: 30px;

  @media (min-width: 767px) {
    justify-content: center;  
    flex-wrap: wrap;
  }

  div {
    background-color: #c2c9e32b;
    max-width: 35vw;
    width: 35vw;
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 6px;
  }

  @media (min-width: 767px) {
    div {
      max-width: 25vw;
    }
  }

  img {
    width: 100px;
    height: 100px;
  }

  p {
    text-align: center;
    font-size: 1.2rem;
  }
`;
