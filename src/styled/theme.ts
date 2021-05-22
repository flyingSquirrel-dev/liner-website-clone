export interface Theme {
  fontSize: Record<FontSize, string>;
  color: Record<Color, string>;
}

type FontSize = 'normal' | 'regular' | 'small';
type Color = 'deepGray';

const theme: Theme = {
  fontSize: {
    normal: '16px',
    regular: '14px',
    small: '12px',
  },
  color: {
    deepGray: '#333',
  },
};

export default theme;
