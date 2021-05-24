import { PageTitle } from '../../components/PageTitle';
import {
  HIGHLIGHTS_SUBTITLE,
  MY_HIGHLIGHTS,
  MY_HIGHLIGHTS_SUBTITLE,
  TAB_MENU_LIST,
} from '../../constants';
import styled from 'styled-components';
import highlightsJSON from '../../images/lottie/highlights';
import { PageSubtitle } from '../../components/PageSubtitle';
import { Tabs } from '../../components/Tabs';
import { FilterIcon } from '../../components/FilterIcon';

const Container = styled.section`
  display: inline-block;
`;

const TopWrapper = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  width: 100%;
`;

export const MyHighlights = () => {
  return (
    <Container>
      <TopWrapper>
        <TitleWrapper>
          <PageTitle
            title={MY_HIGHLIGHTS}
            infoboxImage={highlightsJSON}
            infoboxTitle={MY_HIGHLIGHTS}
            infoboxSubtitle={HIGHLIGHTS_SUBTITLE}
          />
          <PageSubtitle subtitle={MY_HIGHLIGHTS_SUBTITLE} />
        </TitleWrapper>
      </TopWrapper>
      <Tabs options={TAB_MENU_LIST} />
      <FilterIcon />
    </Container>
  );
};
