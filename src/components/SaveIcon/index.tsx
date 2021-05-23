import styled, { css } from 'styled-components';
import unsaveIcon from '../../images/save.svg';
import saveIcon from '../../images/save-fill.svg';
import { useState } from 'react';
import { ADD_TAGS } from '../../constants';

const IconCommonStyle = css`
  width: 32px;
  height: 32px;
  padding: 0;
  background-repeat: no-repeat;
  background-size: 24px;
  background-position: 50%;
`;

const UnsaveIcon = styled.button`
  ${IconCommonStyle};
  background-image: url(${unsaveIcon});
`;

const SaveFillIcon = styled.button`
  ${IconCommonStyle};
  background-image: url(${saveIcon});
`;

const Text = styled.span`
  font-weight: 500;
  line-height: 1.5;
  font-size: ${({ theme }) => theme.fontSize.small};
  letter-spacing: -0.3px;
  color: ${({ theme }) => theme.color.lightGray};
`;

export const SaveIcon = () => {
  const [isSaveButtonActive, setSaveButtonActivation] =
    useState<boolean>(false);

  const handleOnClick = () => setSaveButtonActivation(!isSaveButtonActive);

  return isSaveButtonActive ? (
    <>
      <Text>{ADD_TAGS}</Text>
      <SaveFillIcon onClick={handleOnClick} />
    </>
  ) : (
    <UnsaveIcon onClick={handleOnClick} />
  );
};
