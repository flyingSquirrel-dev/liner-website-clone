import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { LEFT_MENU_WIDTH } from '../../constants';

interface Props {
  title: string;
  to: string;
}

const Container = styled(NavLink)`
  width: ${LEFT_MENU_WIDTH}px;
  height: 51px;
  padding: 0 16px;
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 400;
  font-stretch: normal;
  font-style: normal;
  line-height: 51px;
  letter-spacing: -0.4px;
  border-radius: 8px;
  color: ${({ theme }) => theme.color.normalGray};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.background.hoverGray};
  }

  &.active {
    color: ${({ theme }) => theme.color.blue};
    font-weight: 700;
  }
`;

export const Menu = ({ title, to }: Props) => {
  return <Container to={to}>{title}</Container>;
};
