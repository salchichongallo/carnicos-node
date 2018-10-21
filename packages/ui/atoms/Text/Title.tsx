import styled from '@carnicos/ui/styled';

import { Props } from './Text.props';
import * as styles from './Text.styles';

const Title = styled.h1<Props>`
  ${styles.base};

  font-size: 32px;
`;

export default Title;
