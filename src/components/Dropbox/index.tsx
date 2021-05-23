import styled from 'styled-components';
import arrowIcon from '../../images/expand-grey.svg';
import { useState } from 'react';

interface Props {
  title: string;
  description: string;
  options: string[];
}

const Button = styled.button`
  display: flex;
  justify-content: center;
  margin-left: auto;
`;

const Title = styled.span`
  color: ${({ theme }) => theme.color.normalGray};
  font-weight: 400;
  letter-spacing: -0.35px;
`;

const ArrowIcon = styled.span`
  width: 16px;
  height: 16px;
  display: inline-block;
  object-fit: contain;
  margin-left: 4px;
  background-image: url(${arrowIcon});
  background-repeat: no-repeat;
  background-position: 50%;
`;

export const Dropbox = ({ title, description, options }: Props) => {
  const [isDropboxVisible, setDropboxVisibility] = useState<boolean>(false);

  const handleOnClick = () => {
    setDropboxVisibility(!isDropboxVisible);
  };

  return (
    <>
      <Button onClick={handleOnClick}>
        <Title>{title}</Title>
        <ArrowIcon />
      </Button>
      {isDropboxVisible && (
        <div>
          <span>{description}</span>
          <ul>
            {options.map((option) => (
              <li>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
