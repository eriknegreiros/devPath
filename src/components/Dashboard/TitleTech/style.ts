import styled from "styled-components";

export const TitleStyled = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  margin: 10px auto 5px 0;

  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }

  h2 {
    display: flex;
    justify-content: flex-start;

    font-style: bold;
    font-weight: 700;
    color: white;
    margin-left: 30px;
  }

  p {
    display: flex;
    justify-content: center;

    font-style: normal;
    font-weight: 500;

    margin-left: 30px;
    color: white;
  }

  span {
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
      margin-left: 47%;
    }
  }
`;
