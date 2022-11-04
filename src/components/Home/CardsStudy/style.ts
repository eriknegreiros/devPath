import styled from "styled-components";

export const Section = styled.section`
  height: 70vh;
  border-bottom: 1px solid var(--main-color2);

  @media (min-width: 768px) {
    min-height: 97vh;
    max-height: 180vh;
  }
`;

export const DivText = styled.div`
  margin: 20px;
  margin-top: 50px;

  h2 {
    font-size: 1.4rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    h2 {
      text-align: left;
      margin-left: 35px;
      margin-bottom: 50px;
    }
  }
`;

export const Card = styled.div`
  display: flex;
  align-items: center;
  overflow-y: scroll;
  gap: 40px;
  margin: 30px;

  @media (min-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
    gap: 100px;
  }

  div {
    background-color: #c2c9e32b;
    width: 280px;
    height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 20px;
    border-radius: 6px;
  }

  @media (min-width: 768px) {
    div{
      width: 20vw;
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