import styled from 'styled-components';
import Lottie from 'react-lottie';
import signalJSON from '../../images/lottie/signal';

interface Props {
  image?: any;
  title: string;
  subtitle: string;
}

const InfoBubble = styled.div`
  position: absolute;
  top: 0;
  left: 190px;
  min-width: 300px;
  min-height: 100px;
  border-radius: 0.4em;
  box-shadow: 0 8px 20px 0 rgb(39 43 49 / 20%);
  border: 1px solid #969aa2;
  background-color: #52565d;
  z-index: 2;

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 15px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-right-color: #52565d;
    border-left: 0;
    margin-top: -10px;
    margin-left: -10px;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 17px;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSize.normal};
  letter-spacing: -0.4px;
  color: ${({ theme }) => theme.color.white};
`;

const Subtitle = styled.div`
  margin-top: 8px;
  font-weight: 400;
  line-height: 20px;
  font-size: ${({ theme }) => theme.fontSize.regular};
  letter-spacing: -0.35px;
  color: ${({ theme }) => theme.color.white};
`;

export const Infobox = ({ image, title, subtitle }: Props) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: signalJSON,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <InfoBubble>
      <Lottie options={defaultOptions} />
      <TextWrapper>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextWrapper>
    </InfoBubble>
  );
};
