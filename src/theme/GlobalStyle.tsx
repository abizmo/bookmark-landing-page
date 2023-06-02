import { createGlobalStyle } from 'styled-components';
import resetCSS from './resetCSS';

const GlobalStyle = createGlobalStyle`
  ${resetCSS}

  body {
  }
`;

export default GlobalStyle;
