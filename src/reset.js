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
}

a {
      text-decoration: none;
  }

  ul {
      list-style: none;
  }


  @font-face {
    font-family: 'Gilroy-Light';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Gilroy-Light'),
        url('/assets/fonts/Radomir Tinkov - Gilroy-Light.otf') format('opentype');
  }
  @font-face {
    font-family: 'Gilroy-ExtraBold';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Gilroy-ExtraBold'),
        url("/assets/fonts/Radomir Tinkov - Gilroy-ExtraBold.otf") format('opentype');
  }

 
`;

export default GlobalStyle;
