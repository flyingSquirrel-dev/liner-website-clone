import { Portal } from '../../utils/portal';
import styled from 'styled-components';
import { DUMMY_COPY_URL, SHARE_ORIGINAL_PAGE } from '../../constants';
import { CopyButton } from '../CopyButton';
import closeIcon from '../../images/close-light.svg';

interface Props {
  modalHandler: () => void;
}

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 10;
`;

const ModalWrapper = styled.div`
  position: fixed;
  width: 480px;
  top: 50%;
  left: 50%;
  padding: 20px 16px;
  transform: translate(-50%, -50%);
  border-radius: 16px;
  background-color: ${({ theme }) => theme.background.white};
  z-index: 11;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.div`
  padding: 0 12px 0 16px;
  font-size: ${({ theme }) => theme.fontSize.modalTitle};
  font-weight: 700;
  letter-spacing: -0.6px;
  color: ${({ theme }) => theme.color.modalTitle};
`;

const IconWrapper = styled.div`
  display: flex;
  margin-top: 24px;
  padding-bottom: 24px;
  border-bottom: 1px solid #eee;
`;

const Icon = styled.a<{ iconName: string }>`
  width: 36px;
  height: 36px;
  display: inline-block;
  margin-left: 16px;
  background-image: url(${({ iconName }) =>
    require(`../../images/${iconName}.svg`).default});
  background-repeat: no-repeat;
  background-size: 35px;
`;

const CopyURLWrapper = styled.div`
  display: flex;
  margin-top: 7px;
  align-items: center;
  justify-content: space-evenly;
`;

const CopyURLText = styled.div`
  width: 80%;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;
`;

const CloseIcon = styled.button`
  width: 24px;
  height: 24px;
  background-size: 24px;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
`;

export const ShareModal = ({ modalHandler }: Props) => {
  return (
    <Portal>
      <>
        <Background onClick={modalHandler} />
        <ModalWrapper>
          <TitleWrapper>
            <Title>{SHARE_ORIGINAL_PAGE}</Title>
            <CloseIcon onClick={modalHandler} />
          </TitleWrapper>
          <IconWrapper>
            {[
              'facebook',
              'twitter',
              'linkdin',
              'messenger',
              'line',
              'mail',
            ].map((iconName) => (
              <Icon key={iconName} iconName={iconName} />
            ))}
          </IconWrapper>
          <CopyURLWrapper>
            <CopyURLText>{DUMMY_COPY_URL}</CopyURLText>
            <CopyButton />
          </CopyURLWrapper>
        </ModalWrapper>
      </>
    </Portal>
  );
};
