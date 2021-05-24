import styled from 'styled-components';
import backIcon from '../../images/back-header.svg';
import { SaveIcon } from '../SaveIcon';
import { ShareIcon } from '../ShareIcon';
import { MoreIcon } from '../MoreIcon';

const Container = styled.div`
  //position: absolute;
  //top: -35px;
  //left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.background.white};
`;

const BackIcon = styled.div`
  width: 32px;
  height: 32px;
  background-image: url(${backIcon});
  background-position: 50%;
  background-repeat: no-repeat;
`;

const IconWrapper = styled.div`
  display: flex;
`;

export const DetailPageHeader = () => {
  return (
    <Container>
      <BackIcon />
      <IconWrapper>
        <SaveIcon />
        <ShareIcon />
        <MoreIcon />
      </IconWrapper>
    </Container>
  );
};
