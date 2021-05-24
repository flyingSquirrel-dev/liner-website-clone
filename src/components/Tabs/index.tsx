import styled from 'styled-components';
import { MenuListProps } from '../../@types/menu';
import { NavLink } from 'react-router-dom';

interface Props {
  options: MenuListProps[];
}

const Container = styled.ul`
  display: flex;
`;

const Tab = styled(NavLink)`
  padding: 11px 16px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: 700;
  letter-spacing: -0.35px;
  margin-right: 8px;
  background-color: ${({ theme }) => theme.background.white};
  color: ${({ theme }) => theme.color.trendingTitle};

  &:hover {
    background: ${({ theme }) => theme.background.hoverGray};
  }

  &.active {
    background-color: #eef1f4;
    color: ${({ theme }) => theme.color.dropboxOption};
  }
`;

export const Tabs = ({ options }: Props) => {
  return (
    <Container>
      {options.map((option) => (
        <Tab key={option.name} to={option.to}>
          {option.name}
        </Tab>
      ))}
    </Container>
  );
};
