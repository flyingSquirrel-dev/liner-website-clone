import styled from 'styled-components';
import { Menu } from '../../components/Menu';
import { LeftMenuList } from '../../constants';

const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const Home = () => {
  return (
    <>
      <MenuWrapper>
        {LeftMenuList.map((list) => (
          <Menu title={list.name} to={list.to} />
        ))}
      </MenuWrapper>
    </>
  );
};
