import { createGlobalStyle } from 'styled-components';
import resetCSS from './resetCSS';

const GlobalStyle = createGlobalStyle`
  ${resetCSS}

  * {
    font-family: ${({ theme }) => theme.typography.family.sans};
  }
`;

export default GlobalStyle;
