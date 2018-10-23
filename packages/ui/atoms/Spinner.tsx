import styled, { keyframes } from '@carnicos/ui/styled';

type Props = {
  size?: number;
  color?: string;
};

const spin = keyframes`
  to { transform: rotate(360deg); }
`;

const calcSize = ({ size }: { size?: number }) => (size ? `${size}px` : '24px');

const Spinner = styled.span<Props>`
  display: inline-block;

  width: ${calcSize};
  height: ${calcSize};

  &::before {
    position: relative;

    display: inline-block;

    box-sizing: border-box;

    width: 100%;
    height: 100%;

    content: '';
    animation: ${spin} 2s linear infinite;

    color: ${props => (props.color ? props.color : props.theme.primary)};
    border: 2px solid currentColor;
    border-top-color: transparent;
    border-right-color: currentColor;
    border-bottom-color: transparent;
    border-radius: 50%;
  }
`;

export default Spinner;
