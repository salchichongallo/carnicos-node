import * as styledComponents from 'styled-components';

import { Theme } from './theme/Theme';

const {
  css,
  keyframes,
  ThemeProvider,
  default: styled,
  createGlobalStyle,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, createGlobalStyle, keyframes, ThemeProvider };

export default styled;
