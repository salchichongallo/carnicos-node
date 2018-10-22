import styled from 'styled-components';

type Props = {
  vertical?: boolean;
};

const Middle = styled.div<Props>`
  display: flex;
  align-items: center;
  flex-direction: ${props => (props.vertical ? 'column' : 'row')};
  justify-content: center;
`;

export default Middle;
