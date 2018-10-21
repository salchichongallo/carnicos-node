import React from 'react';
import { Logo } from '@carnicos/ui';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  align-items: center;

  height: 100px;

  ${Logo} {
    margin-left: 10%;
  }
`;

const Header = () => (
  <StyledHeader>
    <Logo />
  </StyledHeader>
);

export default Header;
