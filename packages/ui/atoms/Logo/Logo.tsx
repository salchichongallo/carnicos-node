import styled from 'styled-components';

import logo from './logo.png';

const Logo = styled.div`
  display: inline-block;

  width: 196px;
  height: 40px;

  background: url(${logo}) no-repeat center center;
  background-size: contain;
`;

export default Logo;
