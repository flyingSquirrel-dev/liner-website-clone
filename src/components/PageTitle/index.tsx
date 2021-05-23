import styled from 'styled-components';
import infoIcon from '../../images/info.svg';
import { Dropbox } from '../Dropbox';
import { FOR_YOU_TITLE_DROPBOX } from '../../constants';

interface Props {
  title: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const TitleWrapper = styled.div`
  display: flex;
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
`;

export const PageTitle = ({ title }: Props) => {
  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
        <InfoButton />
      </TitleWrapper>
      <Dropbox
        title={FOR_YOU_TITLE_DROPBOX.title}
        description={FOR_YOU_TITLE_DROPBOX.description}
        options={FOR_YOU_TITLE_DROPBOX.options}
      />
    </Container>
  );
};
