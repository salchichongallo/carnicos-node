import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    box-sizing: border-box;

    color: rgba(0, 0, 0, 0.87);
    background: #fff;

    font-family: 'Varela Round', sans-serif;
    font-size: 16px;
  }

  html,
  body,
  #app {
    height: 100%;
  }
`;
