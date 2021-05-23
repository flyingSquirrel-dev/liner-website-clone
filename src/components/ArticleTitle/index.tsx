import styled from 'styled-components';

interface Props {
  title: string;
}

const Container = styled.h2`
  margin-bottom: 8px;
  font-size: ${({ theme }) => theme.fontSize.articleTitle};
  font-weight: 700;
  line-height: 1.33;
  color: ${({ theme }) => theme.color.darkGray};

  &:hover {
    opacity: 0.8;
  }
`;

const Title = styled.div``;

export const ArticleTitle = ({ title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  );
};
