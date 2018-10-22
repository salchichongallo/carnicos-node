import styled from '@carnicos/ui/styled';

import { Props } from './Text.props';
import * as styles from './Text.styles';

const Subtitle = styled.h2<Props>`
  ${styles.base};

  font-size: 19px;
`;

export default Subtitle;
