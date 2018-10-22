import styled from 'styled-components';
import { Link as BaseLink } from 'react-router-dom';

import { allStyles } from './A';

const Link = styled(BaseLink)`
  ${allStyles};
`;

export default Link;
