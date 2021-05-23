import styled from 'styled-components';
import notiSvg from '../../images/noti.svg';

const NotificationIconButton = styled.button`
  width: 32px;
  height: 32px;
  margin-left: auto;
  background-image: url(${notiSvg});
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: 50%;
  border-radius: 50%;
  cursor: pointer;
`;

export const NotificationIcon = () => {
  return <NotificationIconButton />;
};
