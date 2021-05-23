import styled from 'styled-components';
import moreIcon from '../../images/more-light.svg';

const MoreIconButton = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  background-image: url(${moreIcon});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 50%;
`;

export const MoreIcon = () => {
  return <MoreIconButton />;
};
