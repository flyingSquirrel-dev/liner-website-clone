import { Portal } from '../../utils/portal';
import styled from 'styled-components';
import closeIcon from '../../images/close-light.svg';
import tagIcon from '../../images/tag-small.svg';
import lockIcon from '../../images/lock-tooltip.svg';
import {
  APPLY,
  COLOR_FILTER,
  FILTER,
  FILTER_COLOR_LIST,
  PAGE_TYPE,
  PAGE_TYPE_LIST,
  RESET,
  SEARCH_TAGS_PLACE_HOLDER,
  TAGS,
} from '../../constants';

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
  width: 400px;
  min-height: 179px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.background.white};
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 20px 16px;
  display: flex;
  flex-direction: column;
  z-index: 10;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Title = styled.div`
  height: 29px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.modalTitle};
  letter-spacing: -0.6px;
  color: ${({ theme }) => theme.color.modalTitle};
`;

const CloseIcon = styled.button`
  width: 24px;
  height: 24px;
  background-size: 24px;
  background-image: url(${closeIcon});
  background-repeat: no-repeat;
`;

const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Subtitle = styled.div`
  margin-bottom: 16px;
  margin-top: 24px;
  margin-left: 16px;
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.regular};
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.color.trendingTitle};
`;

const SearchFilterWrapper = styled.div`
  position: relative;
  width: 336px;
  height: 40px;
  margin: 0 auto;
  padding: 8px 4px;
  background-color: rgb(246, 248, 250);
  border-radius: 8px;
  overflow-x: hidden;
`;

const TagIcon = styled.span`
  display: inline-block;
  position: absolute;
  top: 50%;
  bottom: 50%;
  left: 0;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);
  background-size: 24px;
  background-image: url(${tagIcon});
  background-repeat: no-repeat;
`;

const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  margin-left: 25px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.trendingKeyword};

  &::placeholder {
    color: ${({ theme }) => theme.background.gray};
  }
`;

const ListWrapper = styled.div<{ isLocked?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme, isLocked }) =>
      !isLocked && theme.background.hoverGray};
  }
`;

const LockColorBlock = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.background.white};
  opacity: 0.5;
`;

const ColorPallet = styled.div<{ colorCode: string; isLocked: boolean }>`
  width: 20px;
  height: 20px;
  margin-left: 16px;
  border-radius: 50%;
  background-color: ${({ colorCode }) => colorCode};

  background-image: url(${({ isLocked }) => (isLocked ? lockIcon : '')});
  background-repeat: no-repeat;
  background-position: 50%;
`;

const List = styled.div`
  margin-left: 16px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: 400;
  line-height: 20px;
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.color.dropboxOption};
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  flex-shrink: 1;
`;

const PageTypeIcon = styled.span<{ iconName: string }>`
  display: inline-block;
  width: 20px;
  height: 20px;
  margin-left: 16px;
  background-size: 20px;
  background-image: url(${({ iconName }) =>
    require(`../../images/${iconName}.svg`).default});
  background-repeat: no-repeat;
  background-position: 50%;
`;

const Divider = styled.div`
  width: 368px;
  height: 1px;
  margin: 16px 0 7px;
  border: 1px solid #eef1f4;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ResetButton = styled.button`
  font-weight: 500;
  line-height: 24px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.color.normalGray};
  border-radius: 8px;
  padding: 8px 12px;

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

const ApplyButton = styled.button`
  font-weight: 700;
  line-height: 24px;
  font-size: ${({ theme }) => theme.fontSize.normal};
  letter-spacing: -0.4px;
  color: #00bdb8;
  padding: 8px 12px;
  border-radius: 8px;

  &:hover {
    background-color: ${({ theme }) => theme.background.hoverWhite};
  }

  &:disabled {
    opacity: 0.3;
    cursor: default;
  }
`;

export const FilterModal = ({ modalHandler }: Props) => {
  return (
    <Portal>
      <>
        <Background onClick={modalHandler} />
        <ModalWrapper>
          <TitleWrapper>
            <Title>{FILTER}</Title>
            <CloseIcon onClick={modalHandler} />
          </TitleWrapper>
          <SubtitleWrapper>
            <Subtitle>{TAGS}</Subtitle>
            <SearchFilterWrapper>
              <TagIcon />
              <SearchInput placeholder={SEARCH_TAGS_PLACE_HOLDER} />
            </SearchFilterWrapper>
          </SubtitleWrapper>
          <SubtitleWrapper>
            <Subtitle>{COLOR_FILTER}</Subtitle>
            {FILTER_COLOR_LIST.map((list) => {
              const { name, colorCode, isLocked } = list;

              return (
                <ListWrapper key={name} isLocked={isLocked}>
                  {isLocked && <LockColorBlock />}
                  <ColorPallet colorCode={colorCode} isLocked={isLocked} />
                  <List>{name}</List>
                </ListWrapper>
              );
            })}
          </SubtitleWrapper>
          <SubtitleWrapper>
            <Subtitle>{PAGE_TYPE}</Subtitle>
            {PAGE_TYPE_LIST.map((list) => {
              const { name, iconName } = list;

              return (
                <ListWrapper key={name}>
                  <PageTypeIcon iconName={iconName} />
                  <List>{name}</List>
                </ListWrapper>
              );
            })}
          </SubtitleWrapper>
          <Divider />
          <ButtonWrapper>
            <ResetButton>{RESET}</ResetButton>
            <ApplyButton>{APPLY}</ApplyButton>
          </ButtonWrapper>
        </ModalWrapper>
      </>
    </Portal>
  );
};
