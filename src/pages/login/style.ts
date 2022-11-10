import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  flex-direction: column;

  main {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .container {
    margin-left: 10vw;
    margin-top: 50px;
  }

  .img {
    width: 500px;
    height: 500px;
  }

  form {
    width: 25%;
    height: 100%;
    display: flex;
    padding-top: 20px;
    flex-direction: column;
    margin: 20px auto;
    color: white;
    gap: 10px;

    div {
      text-align: center;
    }
    h1 {
      margin: 40px 0;
    }

    label {
      font-size: var(--text-size3);
      padding: 5px 0;
    }
    section {
      width: 100%;
      height: 40px;

      text-align: center;
      font-size: var(--text-size4);

      .toRegister {
        align-items: center;
        font-size: var(--text-size4);
        color: green;
        text-decoration: none;
        font-family: var(--font);

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: 768px) {
    main {
      align-items: center;
    }
    form {
      width: 70%;
      max-width: 380px;
      height: 100%;
    }
    .container {
      display: none;
    }
    nav {
      width: 60%;
    }
  }
`;
export const Button = styled.button`
  width: 100%;
  height: 40px;

  border: solid 1px white;
  border-radius: 4px;
  font-family: var(--font);
  color: white;
  background-color: var(--main-color);

  &:disabled{
    cursor: not-allowed;
    opacity: 0.4;   
  }
`;
