import styled from 'styled-components';
import notiSvg from '../../images/noti.svg';

const NotificationIconButton = styled.button`
  cursor: pointer;
  width: 32px;
  height: 32px;
  background-image: url(${notiSvg});
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: 50%;
  border-radius: 50%;
`;

export const NotificationIcon = () => {
  return <NotificationIconButton />;
};
