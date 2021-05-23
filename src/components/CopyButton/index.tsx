import { COPY } from '../../constants';
import styled from 'styled-components';

const Button = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.blue};
  font-weight: 700;

  &:hover {
    background-color: ${({ theme }) => theme.background.hoverWhite};
  }
`;

export const CopyButton = () => {
  return <Button>{COPY}</Button>;
};
