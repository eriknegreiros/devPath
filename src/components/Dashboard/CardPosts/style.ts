import styled from "styled-components";

export const ContainerPost = styled.li`
  display: flex;
  height: 150px;
  max-width: 420px;
  margin: 0 auto;
  background: #ffffff;
  border: 5px solid #051866;
  border-radius: 8px;
  padding: 8px;
  color: rgba(0, 0, 0, 1);
  gap: 25px;

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5px;
  }

  h6 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: center;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: center;
  }

  p {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 17px;
    line-height: 21px;
    text-align: center;
  }
`;

export const DivPost = styled.div`
  width: 215px;
`;
