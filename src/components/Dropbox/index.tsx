import styled from 'styled-components';
import arrowIcon from '../../images/expand-grey.svg';
import checkIcon from '../../images/check-primary.svg';
import { useState } from 'react';

interface OptionProps {
  optionName: string;
  isSelected: boolean;
}

interface Props {
  title: string;
  options: OptionProps[];
  description?: string;
}

const Container = styled.div`
  position: relative;
  margin-left: auto;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.color.normalGray};
  font-weight: 400;
  letter-spacing: -0.35px;
`;

const ArrowIcon = styled.span<{ isDropboxVisible: boolean }>`
  width: 16px;
  height: 16px;
  display: inline-block;
  object-fit: contain;
  margin-left: 4px;
  background-image: url(${arrowIcon});
  background-repeat: no-repeat;
  background-position: 50%;
  transform: rotate(
    ${({ isDropboxVisible }) => (isDropboxVisible ? 180 : 0)}deg
  );
  transition: all 0.2s;
`;

const DropboxWrapper = styled.div`
  position: absolute;
  min-width: 200px;
  padding: 8px 0;
  margin: 0;
  top: 25px;
  right: 0;
  border: 1px solid #eef1f4;
  border-radius: 8px;
  box-shadow: 0 10px 20px 0 rgb(39 43 49 / 10%);
  background: ${({ theme }) => theme.background.white};
  z-index: 2;
`;

const Description = styled.div`
  padding: 8px 15px 0;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: 700;
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.color.trendingTitle};
`;

const Option = styled.li<{ isSelected: boolean }>`
  display: flex;
  padding: 8px 15px;
  height: 40px;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.background.white};
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ isSelected }) => (isSelected ? 500 : 400)};
  letter-spacing: -0.35px;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.color.blue : theme.color.dropboxOption};
  list-style-type: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.background.hoverGray};
  }
`;

const CheckIcon = styled.span`
  display: inline-block;
  width: 14px;
  height: 10px;
  background-image: url(${checkIcon});
  background-repeat: no-repeat;
`;

export const Dropbox = ({ title, description, options }: Props) => {
  const [isDropboxVisible, setDropboxVisibility] = useState<boolean>(false);
  const [selectedOptions, setSelectedOptions] =
    useState<OptionProps[]>(options);

  const handleOnClick = () => {
    setDropboxVisibility((prev) => !prev);
  };

  const handleOptionClick = (option: OptionProps) => {
    setSelectedOptions((prev) => {
      const selectedOptions = [...prev];

      selectedOptions.forEach((prevOption) => {
        if (prevOption.optionName === option.optionName) {
          prevOption.isSelected = !prevOption.isSelected;
        }
      });

      return selectedOptions;
    });
  };

  return (
    <Container>
      <Button onClick={handleOnClick}>
        <Title>{title}</Title>
        <ArrowIcon isDropboxVisible={isDropboxVisible} />
      </Button>
      {isDropboxVisible && (
        <DropboxWrapper>
          <Description>{description}</Description>
          <ul>
            {selectedOptions.map((option) => {
              const { optionName, isSelected } = option;

              return (
                <Option
                  key={optionName}
                  onClick={() => handleOptionClick(option)}
                  isSelected={isSelected}
                >
                  {optionName}
                  {isSelected && <CheckIcon />}
                </Option>
              );
            })}
          </ul>
        </DropboxWrapper>
      )}
    </Container>
  );
};
