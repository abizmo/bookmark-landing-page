import { css } from 'styled-components';

const resetCSS = css`
  * {
    box-sizing: border-box;
  }

  html,
  body {
    margin: 0;
  }

  button,
  ul {
    padding: 0;
  }

  ul[role='list'] {
    list-style: none;
  }
`;

export default resetCSS;
