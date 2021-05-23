import styled from 'styled-components';
import infoIcon from '../../images/info.svg';

interface Props {
  title: string;
}

const Container = styled.div`
  display: inline-flex;
  align-items: center;
`;

const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: 700;
`;

const InfoButton = styled.button`
  width: 32px;
  height: 32px;
  margin-left: 9px;
  background-image: url(${infoIcon});
  background-repeat: no-repeat;
  background-position: 50%;
  cursor: pointer;
`;

export const PageTitle = ({ title }: Props) => {
  return (
    <Container>
      <Title>{title}</Title>
      <InfoButton />
    </Container>
  );
};
