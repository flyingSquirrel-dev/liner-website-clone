import styled from 'styled-components';

interface Props {
  description: string;
}

const Description = styled.div`
  padding-top: 16px;
  margin-bottom: 16px;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.43;
  font-size: ${({ theme }) => theme.fontSize.regular};
  word-wrap: break-word;
`;

export const ArticleDescription = ({ description }: Props) => {
  return <Description>{description}</Description>;
};
