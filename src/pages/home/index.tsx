import { Logo } from '../../components/Logo';
import { SearchBar } from '../../components/SearchBar';
import styled from 'styled-components';
import { NotificationIcon } from '../../components/NotificationIcon';

const HeaderContainer = styled.header`
  display: flex;
  max-width: 80%;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <Logo />
      <SearchBar />
      <NotificationIcon />
    </HeaderContainer>
  );
};

export const Home = () => {
  return <Header />;
};
