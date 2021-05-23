import { MenuListProps } from '../@types/menu';

export const FOR_YOU = 'For You' as const;
export const MY_HIGHLIGHTS = 'My Highlights' as const;
export const MORE = 'More' as const;
export const SEARCHBAR_PLACE_HOLDER = 'Search on LINER' as const;
export const LEFT_MENU_WIDTH = 232;

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
