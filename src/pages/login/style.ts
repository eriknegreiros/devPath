import styled from "styled-components";

export const ContainerLogin = styled.div`
  width: 90%;
  height: 80%;

  display: flex;
  margin: 0 auto;
  flex-direction: column;

  header {
    width: 100%;
    height: 100px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: solid 1px var(--main-color2);
  }
  h1 {
    font-size: var(--text-size);
  }
  nav {
    height: 50%;
    width: 25%;
    max-width: 290px;

    gap: 15px;
    display: flex;
    align-items: center;
  }
  .buttonLink {
    text-decoration: none;
    align-items: center;
    font-size: 0.8rem;
    justify-content: center;
    width: 50%;
    display: flex;

    height: 40px;
    background-color: var(--main-color);
    border: solid 1px white;
    border-radius: 4px;
    color: white;
  }
  main {
    width: 100%;
    height: 650px;
    display: flex;
    padding-top: 80px;

    justify-content: space-between;
    align-items: center;
  }
  .container {
    width: 50%;
    height: 100%;
  }

  form {
    width: 25%;
    height: 100%;
    display: flex;

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

      .toRegister {
        align-items: center;
        font-size: var(--text-size4);
        color: white;
        text-decoration: none;

        &:hover {
          color: var(--main-color2);
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

  color: white;
  background-color: var(--main-color);
`;
