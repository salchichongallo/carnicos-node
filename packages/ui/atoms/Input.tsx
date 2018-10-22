import styled from '@carnicos/ui/styled';

const Input = styled.input`
  width: 100%;
  min-height: 36px;
  padding: 8px;

  border: 1px solid ${props => props.theme.border};
  border-radius: ${props => props.theme.borderRadius};
`;

export default Input;
