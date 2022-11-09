import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    :root{
        --main-color: #010A26;
        --main-color2: #051866;
        --main-color3: #5259FF;
        --main-color4: #000610;
        --main-color5: #C2C9E3;
        --main-color6: #5C6CA4;
        --main-color7: #A6A8AA;

        --positive-color: #3FE864;
        --negative-color: #ff000096;

        --white: #FFFFFF;

        --text-color: #121214;
        --text-color2: #212529;
        --text-color3: #343B41;
        --text-color4: #868E96;
        --text-color5: #F8F9FA;

        --text-size: 26px;
        --main-wiigth: bold;
        --text-size2: 22px;
        --text-size3: 18px;
        --text-size4: 14px;
        --text-size5: 16px;
        --main-wiigth2: regular;
        

        --font:'Inter', sans-serif;

    }
    
    *{
        list-style: none;
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    body,html{
    width: 100vw;
    height: 100vh;
  }
  
  body {
    background-color: var(--main-color4);
    color: var(--text-color5);
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
  }

  body, input, button, textarea {
    font-family: 'Roboto';
    font-size: 1.6rem;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight:var(--main-wiigth);
  }

  button {
    cursor: pointer;
  }

  a{
    text-decoration: none;
    color: #F8F9FA;
  }

  a:hover{
    color: #5259FF;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--main-color4);
    margin: 1rem;
    border-radius: 1.6rem;
  }

  ::-webkit-scrollbar-thumb {
    background: var(--main-color2);
    border-radius: 1.6rem;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--main-color);
  }
`;

export default GlobalStyle;
