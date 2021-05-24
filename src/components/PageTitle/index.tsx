import styled from 'styled-components';
import infoIcon from '../../images/info.svg';
import { useState } from 'react';
import { Infobox } from '../Infobox';

interface Props {
  title: string;
  infoboxImage: any;
  infoboxTitle: string;
  infoboxSubtitle: string;
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

const InfoWrapper = styled.div`
  position: relative;
`;

const InfoButton = styled.button`
  width: 32px;
  height: 32px;
  margin-left: 9px;
  background-image: url(${infoIcon});
  background-repeat: no-repeat;
  background-position: 50%;
`;

export const PageTitle = ({
  title,
  infoboxImage,
  infoboxTitle,
  infoboxSubtitle,
}: Props) => {
  const [isInfoboxOpen, setInfoboxOpen] = useState<boolean>(false);

  const handleInfoButtonClick = () => {
    setInfoboxOpen((prev) => !prev);
  };

  return (
    <Container>
      <TitleWrapper>
        <Title>{title}</Title>
        <InfoWrapper>
          <InfoButton onClick={handleInfoButtonClick} />
          {isInfoboxOpen && (
            <Infobox
              image={infoboxImage}
              title={infoboxTitle}
              subtitle={infoboxSubtitle}
            />
          )}
        </InfoWrapper>
      </TitleWrapper>
    </Container>
  );
};
