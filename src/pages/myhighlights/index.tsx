import { PageTitle } from '../../components/PageTitle';
import { HIGHLIGHTS_SUBTITLE, MY_HIGHLIGHTS } from '../../constants';
import styled from 'styled-components';
import highlightsJSON from '../../images/lottie/highlights';

const Container = styled.section`
  display: inline-block;
`;

export const MyHighlights = () => {
  return (
    <Container>
      <PageTitle
        title={MY_HIGHLIGHTS}
        infoboxImage={highlightsJSON}
        infoboxTitle={MY_HIGHLIGHTS}
        infoboxSubtitle={HIGHLIGHTS_SUBTITLE}
      />
    </Container>
  );
};
