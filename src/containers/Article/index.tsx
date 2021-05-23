import { ArticleTitle } from '../../components/ArticleTitle';
import { ArticleDescription } from '../../components/ArticleDescription';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import icon from '../../images/favicon.svg';

interface Props {
  title: string;
  url: string;
  host: string;
  description: string;
  articleID: number;
}

const Container = styled(Link)`
  padding: 24px 16px 0;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Reference = styled.div`
  display: flex;
  align-items: center;
`;

const ReferenceIcon = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  background-image: url(${icon});
  background-repeat: no-repeat;
  background-position: 50%;
`;

const ReferenceText = styled.a`
  font-size: ${({ theme }) => theme.fontSize.small};
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray};
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const BottomIcon = styled.button<{ url: string }>`
  width: 32px;
  height: 32px;
  padding: 0;
  background-image: url(${({ url }) =>
    require(`../../images/${url}.svg`).default});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 50%;
  box-sizing: border-box;
`;

export const Article = ({ title, host, description, articleID }: Props) => {
  return (
    <Container to={`/detail/${articleID}`}>
      <TextWrapper>
        <ArticleTitle title={title} />
        <ArticleDescription description={description} />
      </TextWrapper>
      <BottomWrapper>
        <Reference>
          <ReferenceIcon />
          <ReferenceText href={host} target="_blank" rel="noreferrer noopener">
            {host}
          </ReferenceText>
        </Reference>
        <IconWrapper>
          {['save', 'share-header', 'more-light'].map((iconName) => (
            <BottomIcon url={iconName} />
          ))}
        </IconWrapper>
      </BottomWrapper>
    </Container>
  );
};
