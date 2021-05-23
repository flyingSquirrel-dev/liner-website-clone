import { PageTitle } from '../../components/PageTitle';
import { MY_HIGHLIGHTS } from '../../constants';
import styled from 'styled-components';

const Container = styled.section`
  display: inline-block;
`;

export const MyHighlights = () => {
  return (
    <Container>
      <PageTitle title={MY_HIGHLIGHTS} />
    </Container>
  );
};
