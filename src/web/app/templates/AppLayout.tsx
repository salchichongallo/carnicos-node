import React, { PureComponent } from 'react';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';

type Props = {
  children: React.ReactNode;
};

const Template = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  grid-template-columns: 100%;

  height: 100%;
  min-height: 100%;
`;

class AppLayout extends PureComponent<Props> {
  public render() {
    return (
      <Template>
        <Header />
        {this.props.children}
        <Footer />
      </Template>
    );
  }
}

export default AppLayout;
