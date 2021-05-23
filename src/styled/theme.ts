export interface Theme {
  fontSize: Record<FontSize, string>;
  color: Record<Color, string>;
  background: Record<BackgroundColor, string>;
}

type FontSize = 'normal' | 'regular' | 'small';
type Color = 'deepGray' | 'lightGray';
type BackgroundColor = 'gray';

const theme: Theme = {
  fontSize: {
    normal: '16px',
    regular: '14px',
    small: '12px',
  },
  color: {
    deepGray: '#333',
    lightGray: '#b6b8ba',
  },
  background: {
    gray: '#bcbec0',
  },
};

export default theme;
