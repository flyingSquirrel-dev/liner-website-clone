import styled from 'styled-components';
import searchIcon from '../../images/search-header.svg';
import { SEARCH_MY_HIGHLIGHTS_PLACE_HOLDER } from '../../constants';

const Container = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 32px;
  margin-left: 16px;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #dde1e7;
`;

const Input = styled.input`
  width: calc(100% - 32px);
  height: 100%;
  padding: 8px 16px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  background-color: transparent;
  color: ${({ theme }) => theme.color.trendingKeyword};

  &::placeholder {
    color: ${({ theme }) => theme.background.gray};
  }
`;

const SearchIcon = styled.span`
  display: inline-block;
  width: 28px;
  height: 28px;
  background-image: url(${searchIcon});
  background-repeat: no-repeat;
  background-size: 28px;
  background-position: 50%;
`;

export const SearchHighlightBar = () => {
  return (
    <Container>
      <Input placeholder={SEARCH_MY_HIGHLIGHTS_PLACE_HOLDER} />
      <SearchIcon />
    </Container>
  );
};
