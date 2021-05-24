import { VIEW_ORIGINAL } from '../../constants';
import styled from 'styled-components';

interface Props {
  url: string;
}

const Anchor = styled.a`
  display: flex;
  margin: 40px 0;
  width: 100%;
  height: 48px;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: 500;
  letter-spacing: -0.35px;
  border: 1px solid #dde1e7;
  background-color: #fff;
  color: ${({ theme }) => theme.color.normalGray};
  text-align: center;

  &:hover {
    background-color: ${({ theme }) => theme.background.hoverGray};
  }
`;

export const ViewOriginalButton = ({ url }: Props) => {
  return (
    <Anchor href={url} target="_blank" rel="noreferrer noopener">
      {VIEW_ORIGINAL}
    </Anchor>
  );
};
