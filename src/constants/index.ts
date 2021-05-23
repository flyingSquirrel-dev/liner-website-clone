import { MenuListProps } from '../@types/menu';

export const FOR_YOU = 'For You' as const;
export const MY_HIGHLIGHTS = 'My Highlights' as const;
export const MORE = 'More' as const;
export const SEARCHBAR_PLACE_HOLDER = 'Search on LINER' as const;
export const LEFT_MENU_WIDTH = 232;
export const INPUT_MIN_WIDTH = 550;

export const LeftMenuList: MenuListProps[] = [
  { name: FOR_YOU, to: '/home' },
  { name: MY_HIGHLIGHTS, to: '/myhighlights' },
  { name: MORE, to: '/more' },
];
