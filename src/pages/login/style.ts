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
      margin: 20px 0;
      font-size: 1.5rem;
    }

    label {
      font-size: var(--text-size3);
      padding: 5px 0;
    }
    .redirect {
      width: 10rem;
      align-self: center;

      .toRegister {
        font-size: var(--text-size4);
        color: var(--white);
        text-decoration: none;
        font-family: var(--font);

        &:hover::after {
          transform: scaleX(1);
        }
      }

      .toRegister::after {
        display: block;
        content: "";
        border-bottom: solid 1px var(--white);
        transform: scaleX(0);
        transition: transform 250ms ease-in-out;
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
  width: auto;
  height: 2.875rem;

  border: solid 1px white;
  border-radius: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.375rem;
  text-align: center;
  color: var(--text-color5);
  background: var(--main-color);
`;
