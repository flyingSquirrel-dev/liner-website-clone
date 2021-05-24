import { useState } from 'react';
import styled from 'styled-components';
import shareIcon from '../../images/share-header.svg';
import { ShareModal } from '../ShareModal';

const Icon = styled.button`
  width: 32px;
  height: 32px;
  padding: 0;
  background-image: url(${shareIcon});
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.background.hoverGray};
    border-radius: 50%;
  }
`;

export const ShareIcon = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Icon onClick={handleOnClick} />
      {isOpen && <ShareModal modalHandler={handleOnClick} />}
    </>
  );
};
