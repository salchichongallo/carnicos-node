import React, { PureComponent } from 'react';

import Header from 'components/Header';

class NotFound extends PureComponent {
  public render() {
    return (
      <>
        <Header />
        <div>Page not found.</div>
      </>
    );
  }
}

export default NotFound;
