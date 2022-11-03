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
    height: 100%;
    display: flex;

    justify-content: space-between;
    align-items: center;
  }
  img {
    width: 50%;
    height: 50%;
  }

  form {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    color: white;
    gap: 5px;
  }
  label {
    font-size: var(--text-size4);
    padding: 5px 0;
  }
  section {
    width: 100%;
    height: 40px;
    text-align: center;
  }

  span {
    align-items: center;
    font-size: var(--text-size4);
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
    img {
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
