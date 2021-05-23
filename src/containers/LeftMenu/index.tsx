import styled from 'styled-components';
import { Menu } from '../../components/MenuItem';
import { LeftMenuList } from '../../constants';

const Container = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const LeftMenu = () => {
  return (
    <Container>
      {LeftMenuList.map((list) => (
        <Menu title={list.name} to={list.to} />
      ))}
    </Container>
  );
};
