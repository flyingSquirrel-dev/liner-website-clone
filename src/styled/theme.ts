export interface Theme {
  fontSize: Record<FontSize, string>;
  color: Record<Color, string>;
  background: Record<BackgroundColor, string>;
}

type FontSize =
  | 'normal'
  | 'regular'
  | 'tiny'
  | 'large'
  | 'articleTitle'
  | 'modalTitle'
  | 'small';
type Color =
  | 'deepGray'
  | 'lightGray'
  | 'normalGray'
  | 'modalTitle'
  | 'blue'
  | 'darkGray'
  | 'gray'
  | 'trendingTitle'
  | 'trendingKeyword'
  | 'dropboxOption'
  | 'white';
type BackgroundColor =
  | 'gray'
  | 'hoverGray'
  | 'white'
  | 'hoverWhite'
  | 'hoverLightGray';

const theme: Theme = {
  fontSize: {
    large: '32px',
    modalTitle: '24px',
    articleTitle: '20px',
    normal: '16px',
    regular: '14px',
    small: '12px',
    tiny: '11px',
  },
  color: {
    darkGray: '#222',
    modalTitle: '#272b31',
    deepGray: '#333',
    lightGray: '#b6b8ba',
    normalGray: '#787d86',
    gray: '#777',
    blue: '#00bdb8',
    trendingTitle: '#969aa2',
    trendingKeyword: '#555',
    dropboxOption: '#52565d',
    white: '#fff',
  },
  background: {
    gray: '#bcbec0',
    hoverGray: '#f6f8fa',
    hoverLightGray: '#eef1f4',
    hoverWhite: '#e5f8f7',
    white: '#fff',
  },
};

export default theme;
