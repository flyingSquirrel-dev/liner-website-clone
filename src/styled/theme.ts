export interface Theme {
  fontSize: Record<FontSize, string>;
  color: Record<Color, string>;
  background: Record<BackgroundColor, string>;
}

type FontSize = 'normal' | 'regular' | 'small' | 'large' | 'articleTitle';
type Color =
  | 'deepGray'
  | 'lightGray'
  | 'normalGray'
  | 'blue'
  | 'darkGray'
  | 'gray';
type BackgroundColor = 'gray' | 'hoverGray';

const theme: Theme = {
  fontSize: {
    large: '32px',
    articleTitle: '20px',
    normal: '16px',
    regular: '14px',
    small: '11px',
  },
  color: {
    darkGray: '#222',
    deepGray: '#333',
    lightGray: '#b6b8ba',
    normalGray: '#787d86',
    gray: '#777',
    blue: '#00bdb8',
  },
  background: {
    gray: '#bcbec0',
    hoverGray: '#f6f8fa',
  },
};

export default theme;
