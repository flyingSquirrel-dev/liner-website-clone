import { Logo } from '../Logo';
import { SearchBar } from '../SearchBar';
import { NotificationIcon } from '../NotificationIcon';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  justify-content: space-between;
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
