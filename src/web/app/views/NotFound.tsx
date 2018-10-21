import React, { PureComponent } from 'react';
import { Middle, Title } from '@carnicos/ui';

import AppLayout from 'templates/AppLayout';

class NotFound extends PureComponent {
  public render() {
    return (
      <AppLayout>
        <Middle as="main">
          <Title>Page not found</Title>
        </Middle>
      </AppLayout>
    );
  }
}

export default NotFound;
