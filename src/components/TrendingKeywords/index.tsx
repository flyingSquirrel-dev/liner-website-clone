import styled from 'styled-components';
import { TRENDING_KEYWORDS } from '../../constants';
import { trendingKeywords } from '../../mock/keywords/trend';

const Container = styled.div`
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

const KeywordsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Keyword = styled.div`
  padding: 4px 8px;
  margin-bottom: 8px;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: 500;
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.color.trendingKeyword};
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.background.hoverLightGray};
    color: ${({ theme }) => theme.color.blue};
  }
`;

export const TrendingKeywords = () => {
  return (
    <Container>
      <Title>{TRENDING_KEYWORDS}</Title>
      <KeywordsWrapper>
        {trendingKeywords.map((keyword) => (
          <Keyword>{keyword}</Keyword>
        ))}
      </KeywordsWrapper>
    </Container>
  );
};
