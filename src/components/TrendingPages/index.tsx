import styled from 'styled-components';
import { TRENDING_PAGES } from '../../constants';
import { trendingPage1 } from '../../mock/articles/trendingPage1';

const Container = styled.div`
  margin-top: 16px;
  padding: 16px 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.background.hoverGray};
`;

const Title = styled.div`
  padding-bottom: 8px;
  border-bottom: 1px solid #dde1e7;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: 700;
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.color.trendingTitle};
`;

const PagesWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const HashTagsWrapper = styled.div`
  margin-bottom: 4px;
  display: flex;
  flex-wrap: wrap;
  height: 15px;
  overflow-y: hidden;
`;

const Hashtag = styled.div`
  color: ${({ theme }) => theme.color.gray};
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.3px;
`;

const PageTitle = styled.div`
  width: 250px;
  display: inline-block;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${({ theme }) => theme.color.deepGray};
  font-family: 'Roboto';
  font-size: ${({ theme }) => theme.fontSize.normal};
  font-weight: 700;
  line-height: 1.25;
`;

const PageURL = styled.div`
  padding-top: 2px;
  font-size: ${({ theme }) => theme.fontSize.tiny};
  font-weight: 400;
  font-family: 'Roboto';
  color: #999;
`;

const PageWrapper = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.background.hoverLightGray};
    color: ${({ theme }) => theme.color.blue};
  }
`;

export const TrendingPages = () => {
  return (
    <Container>
      <Title>{TRENDING_PAGES}</Title>
      <PagesWrapper>
        {[1, 2, 3, 4, 5].map((page) => {
          const { title, hashtags, url } = trendingPage1;

          return (
            <PageWrapper key={page}>
              <HashTagsWrapper>
                {hashtags.map((hashtag) => (
                  <Hashtag key={hashtag}>{hashtag}</Hashtag>
                ))}
              </HashTagsWrapper>
              <PageTitle>{title}</PageTitle>
              <PageURL>{url}</PageURL>
            </PageWrapper>
          );
        })}
      </PagesWrapper>
    </Container>
  );
};
