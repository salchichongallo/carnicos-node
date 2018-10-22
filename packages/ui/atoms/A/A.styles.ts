import { css } from 'styled-components';

import { Props } from './A.props';

export const small = css`
  font-size: 15px;
`;

export const allStyles = css<Props>`
  cursor: pointer;
  text-decoration: none;

  color: ${props => props.theme.primaryHover};

  font-size: 17px;
  ${props => props.small && small};

  &:hover {
    text-decoration: underline;
  }
`;
