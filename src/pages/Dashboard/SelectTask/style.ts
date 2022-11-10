import styled from "styled-components";

export const Main = styled.main`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;

 

  @media (min-width: 768px) {
    width: 100vw;
    flex-direction: row;
    justify-content: space-around;
    margin: 0 auto 40px auto;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    gap: 15px;
    margin: 30px auto 0 auto;
  }

  @media (min-width: 768px) {
    div {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
      margin: 10px 20px 0px 10px;
    }
  }

  h5 {
    color: #ffffff;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 39px;
  }

  a {
    background-color: #c2c9e32b;
    width: 300px;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    margin-top: 60px;
    border-radius: 6px;
    text-decoration: none;
    padding: 20px;
    cursor: pointer;
    text-align: center;
  }

  & a:hover {
    border: 4px solid #c2c9e32b;
  }

  img {
    max-width: 250px;
  }

  p {
    color: #c4c4c4;
    padding: 10px;
    max-width: 200px;
  }
`;
