import { createGlobalStyle } from 'styled-components';


const size = {
  mobile: '0px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '2560px'
}

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`
};

const GlobalStyle = createGlobalStyle `
  body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  @font-face {
    font-family: 'Chivo', sans-serif;
    src: url('https://fonts.googleapis.com/css?family=Chivo');
  }
  button, a {
    cursor: pointer;
    outline: none;
  }
`;

export default GlobalStyle;