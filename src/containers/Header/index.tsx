import { Logo } from '../../components/Logo';
import { SearchBar } from '../../components/SearchBar';
import { NotificationIcon } from '../../components/NotificationIcon';
import styled from 'styled-components';
import { LEFT_MENU_WIDTH } from '../../constants';

const HeaderContainer = styled.header`
  position: fixed;
  display: grid;
  width: inherit;
  top: 0;
  height: 64px;
  grid-template-columns: ${LEFT_MENU_WIDTH}px auto 344px;
  background-color: ${({ theme }) => theme.background.white};
  align-items: center;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SearchBar />
      <NotificationIcon />
    </HeaderContainer>
  );
};
