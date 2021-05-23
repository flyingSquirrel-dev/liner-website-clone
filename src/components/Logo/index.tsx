import styled from 'styled-components';
import linerLogo from '../../images/liner-logo.svg';

const Anchor = styled.a`
  width: 32px;
  height: 32px;
  background-image: url(${linerLogo});
  background-size: 32px;
  background-repeat: no-repeat;
`;

export const Logo = () => <Anchor href="/" />;
