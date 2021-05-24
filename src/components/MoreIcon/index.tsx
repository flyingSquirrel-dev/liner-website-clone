import styled from 'styled-components';
import moreIcon from '../../images/more-light.svg';
import { useState } from 'react';
import { MoreDropbox } from './MoreDropbox';

const Container = styled.div`
  position: relative;
`;

const MoreIconButton = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  background-image: url(${moreIcon});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.background.hoverGray};
    border-radius: 50%;
  }
`;

export const MoreIcon = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <Container>
      <MoreIconButton onClick={handleOnClick} />
      {isOpen && <MoreDropbox />}
    </Container>
  );
};
