import { PageTitle } from '../../components/PageTitle';
import { FOR_YOU, FOR_YOU_PAGE_SUBTITLE } from '../../constants';
import { PageSubtitle } from '../../components/PageSubtitle';
import styled from 'styled-components';
import { Article } from '../../containers/Article';
import { article1 } from '../../mock/articles/article1';
import { article2 } from '../../mock/articles/article2';

const Container = styled.div`
  display: inline-block;
  width: 500px;
`;

const TitleWrapper = styled.div`
  width: 100%;
`;

const ArticleWrapper = styled.div``;

export const Home = () => {
  return (
    <Container>
      <TitleWrapper>
        <PageTitle title={FOR_YOU} />
        <PageSubtitle subtitle={FOR_YOU_PAGE_SUBTITLE} />
      </TitleWrapper>
      <ArticleWrapper>
        {[article1, article2, article1, article2, article1].map((article) => (
          <Article
            title={article.title}
            url={article.url}
            host={article.host}
            description={article.description}
            articleID={article.id}
            thumbnailURL={article.thumbnailURL}
          />
        ))}
      </ArticleWrapper>
    </Container>
  );
};
