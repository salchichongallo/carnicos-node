import { createGlobalStyle } from '@carnicos/ui/styled';

export default createGlobalStyle`
  body {
    box-sizing: border-box;

    color: ${props => props.theme.textPrimary};
    background: #fff;

    font-family: ${props => props.theme.primaryFont};
    font-size: 16px;
  }

  html,
  body,
  #app {
    height: 100%;
  }
`;
