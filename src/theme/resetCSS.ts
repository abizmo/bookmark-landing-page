import { css } from 'styled-components';

const resetCSS = css`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  ul {
    margin: 0;
  }

  button,
  ul {
    padding: 0;
  }

  ul[role='list'] {
    list-style: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default resetCSS;
