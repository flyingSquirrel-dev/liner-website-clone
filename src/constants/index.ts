import { MenuListProps } from '../@types/menu';

export const SEARCHBAR_PLACE_HOLDER = 'Search on LINER' as const;
export const LEFT_MENU_WIDTH = 232;
export const INPUT_MIN_WIDTH = 550;

export const LeftMenuList: MenuListProps[] = [
  { name: 'For You', to: '/home' },
  { name: 'My Highlights', to: '/myhighlights' },
  { name: 'More', to: '/more' },
];
