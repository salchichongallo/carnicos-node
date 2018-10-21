import React, { PureComponent } from 'react';
import { Middle, Title } from '@carnicos/ui';

import MainLayout from 'templates/MainLayout';

class NotFound extends PureComponent {
  public render() {
    return (
      <MainLayout>
        <Middle as="main">
          <Title>Page not found</Title>
        </Middle>
      </MainLayout>
    );
  }
}

export default NotFound;
