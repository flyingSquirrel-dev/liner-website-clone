import { Logo } from '../../components/Logo';
import { SearchBar } from '../../components/SearchBar';
import { NotificationIcon } from '../../components/NotificationIcon';
import styled from 'styled-components';
import { LEFT_MENU_WIDTH } from '../../constants';

const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: ${LEFT_MENU_WIDTH}px 500px 1fr;
  align-items: center;
  margin-top: 10px;
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
