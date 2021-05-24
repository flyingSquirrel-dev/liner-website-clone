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
import { SearchHighlightBar } from '../../components/SearchHighlightBar';
import { TrendingKeywords } from '../../components/TrendingKeywords';
import { TrendingPages } from '../../components/TrendingPages';

const Container = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: inline-block;
  flex-shrink: 1;
`;

const TopWrapper = styled.div`
  display: flex;
`;

const TitleWrapper = styled.div`
  width: 100%;
`;

const TabWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  justify-content: space-between;
  align-items: center;
`;

const FilterWrapper = styled.div`
  display: flex;
`;

const RightWrapper = styled.div`
  width: 320px;
  margin-left: 24px;
  flex-shrink: 0;
`;

export const MyHighlights = () => {
  return (
    <Container>
      <ContentWrapper>
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
        <TabWrapper>
          <Tabs options={TAB_MENU_LIST} />
          <FilterWrapper>
            <FilterIcon />
            <SearchHighlightBar />
          </FilterWrapper>
        </TabWrapper>
      </ContentWrapper>
      <RightWrapper />
    </Container>
  );
};
