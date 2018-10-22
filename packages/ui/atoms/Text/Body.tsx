import styled from '@carnicos/ui/styled';

import { Props } from './Text.props';
import * as styles from './Text.styles';

const Body = styled.p<Props>`
  ${styles.base};

  font-size: 17px;
`;

export default Body;
