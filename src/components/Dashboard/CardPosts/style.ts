import styled from "styled-components";

export const ContainerPost = styled.li`
  display: flex;
  flex-direction: column;

  min-height: max-content;
  height: 200px;
  width: 36%;
  min-width: 400px;
  margin: 0 auto;
  background: #ffffff;
  border: 5px solid #051866;
  border-radius: 8px;
  padding: 8px;
  color: rgba(0, 0, 0, 1);
  gap: 5px;

  main {
    display: flex;

    padding: 5px;
    width: 90%;
    height: 100%;
    gap: 15px;
    margin: 0 auto;

    img {
      width: 3rem;
      height: 3rem;
    }

    div {
      display: flex;
      flex-direction: column;
      text-align: start;
    }
  }

  h6 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    text-align: start;
  }

  span {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    text-align: start;
  }
`;

export const SectionPost = styled.section`
  width: 100%;
  height: 90%;
  align-items: flex-start;

  p {
    text-align: start;
    font-size: var(--text-size4);
  }
`;

export const EditPost = styled.div`
  width: 100%;
  height: 10%;

  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;

  svg {
    width: 20px;
    height: 20px;
    transition: 0.5s;

    &:hover {
      transition: 0.5s;
      transform: scale(1.2);
    }
  }
`;
