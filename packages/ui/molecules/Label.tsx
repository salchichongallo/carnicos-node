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

type AllProps = React.LabelHTMLAttributes<HTMLLabelElement> & Props;

const Label: React.SFC<AllProps> = ({ children, ...props }) => (
  /* eslint-disable-next-line */
  <label {...props}>
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
  </label>
);

export default styled(Label)`
  display: block;
`;
