import styled from 'styled-components';
import { HOME } from '../../constants';

const Anchor = styled.a`
  position: absolute;
  left: 0;
  width: 32px;
  height: 32px;
  background: url(/src/mock/images/liner-logo.svg) no-repeat;
  background-size: 32px;
`;

export const Logo = () => <Anchor href={`/${HOME}`} />;
