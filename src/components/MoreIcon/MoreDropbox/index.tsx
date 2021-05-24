import styled, { css } from 'styled-components';
import likeIcon from '../../../images/like-dropdown.svg';
import dislikeIcon from '../../../images/dislike-dropdown.svg';
import hiddenIcon from '../../../images/hide-dropdown.svg';
import {
  FEWER_PAGES_LIKE_THIS,
  HIDE_THIS_PAGE,
  MORE_PAGES_LIKE_THIS,
} from '../../../constants';

const Container = styled.div`
  position: absolute;
  top: 30px;
  left: 0;
  padding: 8px 0;
  margin: 0;
  min-width: 224px;
  max-width: max-content;
  border: 1px solid #eef1f4;
  border-radius: 8px;
  box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
  background-color: ${({ theme }) => theme.background.white};
`;

const List = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 15px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: 400;
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.color.dropboxOption};
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.background.hoverGray};
  }
`;

const ListWrapper = styled.ul``;

const IconCommonStyle = css`
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  background-image: url(${likeIcon});
  background-repeat: no-repeat;
  background-position: 50%;
  background-size: 24px 24px;
`;

const LikeIcon = styled.span`
  ${IconCommonStyle};
  background-image: url(${likeIcon});
`;

const DislikeIcon = styled.span`
  ${IconCommonStyle};
  background-image: url(${dislikeIcon});
`;

const HiddenIcon = styled.span`
  ${IconCommonStyle};
  background-image: url(${hiddenIcon});
`;

export const MoreDropbox = () => {
  return (
    <Container>
      <ListWrapper>
        <List>
          <LikeIcon />
          {MORE_PAGES_LIKE_THIS}
        </List>
        <List>
          <DislikeIcon />
          {FEWER_PAGES_LIKE_THIS}
        </List>
        <List>
          <HiddenIcon />
          {HIDE_THIS_PAGE}
        </List>
      </ListWrapper>
    </Container>
  );
};
