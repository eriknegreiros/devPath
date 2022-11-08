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

export const Main = styled.main`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  overflow-y: auto;
  padding-bottom: 10px;
  margin: 10px;
  margin-top: 40px;

  @media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 40px;
  }

  h2 {
    font-size: 1.4rem;
    text-align: center;
    margin: 20px;
    margin-top: 50px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 280px;
    height: 270px;
    border: 1px solid var(--main-color2);
  }

  .user {
    margin: 10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  p {
    font-size: 1rem;
  }

  .linkedin {
    border: none;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }

  .github {
    border: none;
    align-items: center;
    flex-direction: row;
    gap: 10px;
  }
`;
