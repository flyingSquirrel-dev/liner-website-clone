import { SEARCHBAR_PLACE_HOLDER } from '../../constants';
import styled from 'styled-components';

import searchIcon from '../../images/search.svg';
import { FormEvent } from 'react';

const SearchForm = styled.form`
  position: relative;
  margin-top: 10px;
`;

const SearchInput = styled.input`
  width: 552px;
  padding: 10px 54px 11px 16px;
  border-radius: 8px;
  background-color: #eef1f4;
  line-height: 1.2;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.color.lightGray};

  &::placeholder {
    color: ${({ theme }) => theme.background.gray};
  }
`;

const SearchIcon = styled.span`
  position: absolute;
  width: 32px;
  height: 32px;
  top: 50%;
  bottom: 50%;
  right: 10px;
  transform: translateY(-50%);
  background-image: url(${searchIcon});
  background-size: 24px;
  background-repeat: no-repeat;
  background-position: 50%;
  border-radius: 50%;
  cursor: pointer;
`;

export const SearchBar = () => {
  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <SearchForm autoComplete="off" onSubmit={handleOnSubmit}>
      <SearchIcon />
      <SearchInput type="text" placeholder={SEARCHBAR_PLACE_HOLDER} />
    </SearchForm>
  );
};
