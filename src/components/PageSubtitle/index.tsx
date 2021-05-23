import styled from 'styled-components';

interface Props {
  subtitle: string;
}

const Subtitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.color.normalGray};
`;

export const PageSubtitle = ({ subtitle }: Props) => {
  return <Subtitle>{subtitle}</Subtitle>;
};
