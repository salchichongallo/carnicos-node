import React, { PureComponent } from 'react';
import styled from 'styled-components';
import { Spinner } from '@carnicos/ui/atoms';
import Button, { Props as BaseProps } from '@carnicos/ui/atoms/Button';

type Props = {
  loading: boolean;
};

type AllProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  BaseProps &
  Props;

class LoadingButton extends PureComponent<AllProps> {
  public render() {
    const { loading, children, ...props } = this.props;

    return (
      <Button {...props}>
        {children}
        {loading && <Spinner color={props.primary ? '#fff' : undefined} />}
      </Button>
    );
  }
}

export default styled(LoadingButton)`
  > ${Spinner} {
    margin-left: 8px;
  }
`;
