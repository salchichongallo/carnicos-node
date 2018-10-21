import { css } from '@carnicos/ui/styled';

import { Props } from './Text.props';

export const secondary = css`
  color: ${props => props.theme.textSecondary};
`;

export const base = css<Props>`
  margin: 0;

  color: ${props =>
    props.secondary ? props.theme.textSecondary : props.theme.textPrimary};

  font-weight: 400;
`;
