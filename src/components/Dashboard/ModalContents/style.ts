import styled from "styled-components";

export const ModalContensStyled = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 100%;

  background-color: var(--main-color4);

  .modal {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;

    width: 80%;
    height: 90%;
  }

  button {
    position: absolute;
    top: 40px;
    left: 95%;
  }

  h3 {
    margin: 35px 0;

    font-style: normal;
    font-weight: 500;
    font-size: 2rem;

    text-align: center;
  }
  p {
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    text-align: center;
  }
`;
