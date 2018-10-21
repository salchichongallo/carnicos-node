import { css } from '@carnicos/ui/styled';

export const base = css`
  display: flex;
  align-items: center;
  justify-content: center;

  min-width: 88px;
  min-height: 36px;
  padding: 8px 16px;

  cursor: pointer;
  user-select: none;
  transition: color, background 75ms ease-in-out;
  will-change: color, background;

  border: none;
  border-radius: 3px;
  background: transparent;

  font-family: inherit;
  font-size: 19px;

  appearance: none;
`;

export const outline = css`
  color: ${props => props.theme.primary};

  &:hover {
    color: ${props => props.theme.primaryHover};
  }

  &:active,
  &:focus {
    color: ${props => props.theme.primaryActive};
  }
`;

export const primary = css`
  color: #fff;
  background: ${props => props.theme.primary};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.38);

  &:hover {
    background: ${props => props.theme.primaryHover};
  }

  &:active,
  &:focus {
    background: ${props => props.theme.primaryActive};
  }
`;

export const wide = css`
  width: 100%;
`;
