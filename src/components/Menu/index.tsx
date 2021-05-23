import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import theme from '../../styled/theme';

interface Props {
  title: string;
  to: string;
}

const Container = styled(NavLink)`
  width: 232px;
  height: 51px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.4px;
  color: ${({ theme }) => theme.color.normalGray};
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    background: ${({ theme }) => theme.background.hoverGray};
  }
`;

export const Menu = ({ title, to }: Props) => {
  return <Container to={to}>{title}</Container>;
};
