import styled from 'styled-components';
import filterIcon from '../../images/filter-header.svg';
import { useState } from 'react';
import { FilterModal } from '../FilterModal';

const FilterIconButton = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  background-image: url(${filterIcon});
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.background.hoverGray};
    border-radius: 50%;
  }
`;

export const FilterIcon = () => {
  const [isOpen, setOpen] = useState<boolean>(false);

  const handleOnClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <FilterIconButton onClick={handleOnClick} />
      {isOpen && <FilterModal modalHandler={handleOnClick} />}
    </>
  );
};
