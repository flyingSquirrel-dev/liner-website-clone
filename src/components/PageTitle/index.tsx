import styled from 'styled-components';
import infoIcon from '../../images/info.svg';
import { FOR_YOU, SIGNAL_SUBTITLE } from '../../constants';
import { useState } from 'react';
import { Infobox } from '../Infobox';

interface Props {
  title: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

const TitleWrapper = styled.div`
  position: relative;
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
  const [isInfoboxOpen, setInfoboxOpen] = useState<boolean>(false);

  const handleInfoButtonClick = () => {
    setInfoboxOpen((prev) => !prev);
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
        <InfoButton onClick={handleInfoButtonClick} />
        {isInfoboxOpen && (
          <Infobox title={FOR_YOU} subtitle={SIGNAL_SUBTITLE} />
        )}
      </TitleWrapper>
    </Container>
  );
};
