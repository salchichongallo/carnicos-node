import styled from '@carnicos/ui/styled';

import { Props } from './Button.props';
import * as styles from './Button.styles';

const Button = styled.button<Props>`
  ${styles.base};
  ${props => props.wide && styles.wide};
  ${props => props.outline && styles.outline};
  ${props => props.primary && styles.primary};
`;

export default Button;
