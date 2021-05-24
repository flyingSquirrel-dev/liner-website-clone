import { useParams } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { DetailPageHeader } from '../../components/DetailPageHeader';
import { article1 } from '../../mock/articles/article1';
import { article2 } from '../../mock/articles/article2';
import { useEffect } from 'react';
import { ArticleProps } from '../../@types/article';
import { ViewOriginalButton } from '../../components/ViewOriginalButton';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
`;

const ContentWrapper = styled.div`
  display: inline-block;
  //flex-shrink: 1;
  flex-grow: 1;
`;

const RightWrapper = styled.div`
  width: 320px;
  margin-left: 24px;
  flex-shrink: 0;
`;

const ArticleWrapper = styled.div``;

const Image = styled.img`
  width: 100%;
  height: 240px;
  border-radius: 4px;
  object-fit: cover;
  object-position: 50% 50%;
`;

const Title = styled.h2`
  margin: 20px 0;
  font-weight: 700;
  font-size: 24px;
  color: #222;
`;

const textCommonStyle = css`
  font-weight: 400;
  line-height: 1.43;
  color: ${({ theme }) => theme.color.trendingKeyword};
  word-wrap: break-word;
`;

const Highlight = styled.div`
  display: flex;
  align-items: center;
  padding-left: 16px;
  border-width: 0 0 0 4px;
  border-left: 4px solid #7fdedb;
  ${textCommonStyle};
`;

const Description = styled.div`
  ${textCommonStyle};
`;

const mockData: Record<string, ArticleProps> = {
  '1': article1,
  '2': article2,
};

export const Detail = () => {
  const { articleID } = useParams<{ articleID: string }>();
  const { title, url, highlight, description, date, thumbnailURL } =
    mockData[articleID];

  return (
    <Container>
      <ContentWrapper>
        <DetailPageHeader />
        <ArticleWrapper>
          {thumbnailURL && <Image src={thumbnailURL} alt={title} />}
          <Title>{title}</Title>
          {highlight ? (
            <Highlight>{highlight}</Highlight>
          ) : (
            <Description>{description}</Description>
          )}
          <ViewOriginalButton url={url} />
        </ArticleWrapper>
      </ContentWrapper>
      <RightWrapper />
    </Container>
  );
};
