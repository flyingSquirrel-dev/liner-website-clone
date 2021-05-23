import { MenuListProps } from '../@types/menu';

export const SEARCHBAR_PLACE_HOLDER = 'Search on LINER' as const;

export const LeftMenuList: MenuListProps[] = [
  { name: 'For You', to: '/home' },
  { name: 'My Highlights', to: '/myhighlights' },
  { name: 'More', to: '/' },
];
