export interface Theme {
  fontSize: Record<FontSize, string>;
  color: Record<Color, string>;
  background: Record<BackgroundColor, string>;
}

type FontSize = 'normal' | 'regular' | 'small';
type Color = 'deepGray' | 'lightGray' | 'normalGray';
type BackgroundColor = 'gray' | 'hoverGray';

const theme: Theme = {
  fontSize: {
    normal: '16px',
    regular: '14px',
    small: '12px',
  },
  color: {
    deepGray: '#333',
    lightGray: '#b6b8ba',
    normalGray: '#787d86',
  },
  background: {
    gray: '#bcbec0',
    hoverGray: '#f6f8fa',
  },
};

export default theme;
