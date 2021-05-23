import { ReactElement, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

interface Props {
  children: ReactElement;
}

export const Portal = ({ children }: Props) => {
  const _element = useRef(document.createElement('div'));

  useEffect(() => {
    _element.current.id = 'modal';

    document.body.style.overflow = 'hidden';
    document.body.appendChild(_element.current);

    return () => {
      document.body.style.overflow = '';
      document.body.removeChild(_element.current);
    };
  }, []);

  return createPortal(children, _element.current);
};
