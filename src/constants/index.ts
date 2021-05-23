import { MenuListProps } from '../@types/menu';

export const FOR_YOU = 'For You' as const;
export const MY_HIGHLIGHTS = 'My Highlights' as const;
export const MORE = 'More' as const;
export const SEARCHBAR_PLACE_HOLDER = 'Search on LINER' as const;
export const LEFT_MENU_WIDTH = 232;
export const CONTENT_WIDTH = 550;

export const LeftMenuList: MenuListProps[] = [
  { name: FOR_YOU, to: '/home' },
  { name: MY_HIGHLIGHTS, to: '/myhighlights' },
  { name: MORE, to: '/more' },
];

export const FOR_YOU_PAGE_SUBTITLE = 'Picked by LINER, just for you' as const;
export const FOR_YOU_TITLE_DROPBOX = {
  title: 'Languages',
  description: 'Select for feed',
  options: ['English', '한국어', '简体字', '繁體字', '日本語', 'Others'],
};

export const ADD_TAGS = '+ Add Tags' as const;
export const SHARE_ORIGINAL_PAGE = 'Share Original Page' as const;
export const DUMMY_COPY_URL =
  'https://www.webmd.com/cold-and-flu/features/what-is-pandemic' as const;
export const COPY = 'COPY' as const;

export const TRENDING_KEYWORDS = 'Trending Keywords' as const;
export const TRENDING_PAGES = 'Trending Pages' as const;
