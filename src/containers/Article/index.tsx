import { ArticleTitle } from '../../components/ArticleTitle';
import { ArticleDescription } from '../../components/ArticleDescription';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import icon from '../../images/favicon.svg';
import { SaveIcon } from '../../components/SaveIcon';
import { ShareIcon } from '../../components/ShareIcon';

interface Props {
  title: string;
  url: string;
  host: string;
  description: string;
  articleID: number;
  thumbnailURL?: string;
}

const Container = styled.div`
  padding-top: 24px;
  padding-bottom: 8px;
  border-bottom: 1px solid #eef1f4;
`;

const TextAndThumbnailWrapper = styled.div`
  display: flex;
`;

const TextWrapper = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  cursor: unset;
`;

const BottomWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Reference = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 16px;
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
  margin-left: 14px;
  font-size: ${({ theme }) => theme.fontSize.tiny};
  font-weight: 400;
  color: ${({ theme }) => theme.color.gray};
  text-decoration: underline;
`;

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 96px;
  height: 96px;
  margin-left: 24px;
  border-radius: 4px;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const Article = ({
  title,
  host,
  description,
  articleID,
  thumbnailURL,
}: Props) => {
  return (
    <Container>
      <TextAndThumbnailWrapper>
        <TextWrapper to={`/detail/${articleID}`}>
          <ArticleTitle title={title} />
          <ArticleDescription description={description} />
        </TextWrapper>
        {thumbnailURL && <Thumbnail src={thumbnailURL} alt={title} />}
      </TextAndThumbnailWrapper>
      <BottomWrapper>
        <Reference>
          <ReferenceIcon />
          <ReferenceText href={host} target="_blank" rel="noreferrer noopener">
            {host}
          </ReferenceText>
        </Reference>
        <IconWrapper>
          <SaveIcon />
          <ShareIcon />
        </IconWrapper>
      </BottomWrapper>
    </Container>
  );
};
