import styled from 'styled-components';

interface Props {
  description: string;
}

const Description = styled.div`
  font-size: ${({ theme }) => theme.fontSize.regular};
`;

export const ArticleDescription = ({ description }: Props) => {
  return <Description>{description}</Description>;
};
