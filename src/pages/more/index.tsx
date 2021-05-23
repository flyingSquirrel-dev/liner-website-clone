import { PageTitle } from '../../components/PageTitle';
import { MORE } from '../../constants';
import styled from 'styled-components';

const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;
`;

export const More = () => {
  return (
    <Container>
      <Title>Hi, there!</Title>
    </Container>
  );
};
