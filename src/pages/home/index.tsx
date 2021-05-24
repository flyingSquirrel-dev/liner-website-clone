import { PageTitle } from '../../components/PageTitle';
import {
  FOR_YOU,
  FOR_YOU_PAGE_SUBTITLE,
  FOR_YOU_TITLE_DROPBOX,
  SIGNAL_SUBTITLE,
} from '../../constants';
import { PageSubtitle } from '../../components/PageSubtitle';
import styled from 'styled-components';
import { Article } from '../../containers/Article';
import { article1 } from '../../mock/articles/article1';
import { article2 } from '../../mock/articles/article2';
import { TrendingKeywords } from '../../components/TrendingKeywords';
import { TrendingPages } from '../../components/TrendingPages';
import { Dropbox } from '../../components/Dropbox';
import signalJSON from '../../images/lottie/signal';

const Container = styled.div`
  display: flex;
`;

const TopWrapper = styled.div`
  display: flex;
`;

const ContentWrapper = styled.div`
  display: inline-block;
  flex-shrink: 1;
`;

const TitleWrapper = styled.div`
  width: 100%;
`;

const ArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightWrapper = styled.div`
  width: 320px;
  margin-left: 24px;
  flex-shrink: 0;
`;

export const Home = () => {
  return (
    <Container>
      <ContentWrapper>
        <TopWrapper>
          <TitleWrapper>
            <PageTitle
              title={FOR_YOU}
              infoboxImage={signalJSON}
              infoboxTitle={FOR_YOU}
              infoboxSubtitle={SIGNAL_SUBTITLE}
            />
            <PageSubtitle subtitle={FOR_YOU_PAGE_SUBTITLE} />
          </TitleWrapper>
          <Dropbox
            title={FOR_YOU_TITLE_DROPBOX.title}
            description={FOR_YOU_TITLE_DROPBOX.description}
            options={FOR_YOU_TITLE_DROPBOX.options}
          />
        </TopWrapper>
        <ArticleWrapper>
          {[article1, article2, article1, article2, article1].map(
            (article, index) => (
              <Article
                key={`${article.title}-${index}`}
                title={article.title}
                url={article.url}
                host={article.host}
                description={article.description}
                articleID={article.id}
                thumbnailURL={article.thumbnailURL}
              />
            ),
          )}
        </ArticleWrapper>
      </ContentWrapper>
      <RightWrapper>
        <TrendingKeywords />
        <TrendingPages />
      </RightWrapper>
    </Container>
  );
};
