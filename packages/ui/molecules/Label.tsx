import React from 'react';
import styled from 'styled-components';
import { Body } from '@carnicos/ui/atoms';

type Props = {
  children: React.ReactNode;
};

export const Wrapper = styled.span`
  display: block;

  margin-bottom: 4px;
`;

const BaseLabel = styled.label`
  display: block;
`;

const Label: React.SFC<Props> = ({ children, ...props }) => (
  <BaseLabel {...props}>
    {React.Children.map(children, child => {
      if (typeof child !== 'string') {
        return child;
      }

      return (
        <Body secondary as={Wrapper}>
          {child}
        </Body>
      );
    })}
  </BaseLabel>
);

export default styled(Label)`
  /* stylelint-disable-next-line block-no-empty */
`;
