import React, { PureComponent } from 'react';
import { Link, Middle as BaseMiddle } from '@carnicos/ui';
import styled from 'styled-components';

import AppLayout from 'templates/AppLayout';

import LoginCard from './LoginCard';

const Middle = styled(BaseMiddle)`
  margin: 2px 0;

  > ${Link} {
    margin-top: 30px;
  }
`;

class Login extends PureComponent {
  public render() {
    return (
      <AppLayout>
        <Middle vertical>
          <LoginCard onLogin={() => void 0} />
          <Link to="/registro-tendero">Registro tenderos</Link>
        </Middle>
      </AppLayout>
    );
  }
}

export default Login;
