import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

body {

  line-height: 1.5;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Inter', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

a {
      text-decoration: none;
  }

  ul {
      list-style: none;
  }

@font-face {
  font-family: "Gilroy";
  src: url("/assets/fonts/Radomir Tinkov - Gilroy-ExtraBold.otf") format("opentype");
    font-weight: 500;
  }
@font-face {
  font-family: "Gilroy-Light";
  src: url("/assets/fonts/Radomir Tinkov - Gilroy-Light.otf") format("opentype");
    font-weight: 400;
  }

 
`;

export default GlobalStyle;
