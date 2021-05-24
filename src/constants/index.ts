import { MenuListProps } from '../@types/menu';

export const FOR_YOU = 'For You' as const;
export const MY_HIGHLIGHTS = 'My Highlights' as const;
export const MORE = 'More' as const;
export const FILTER = 'Filter' as const;
export const TAGS = 'Tags' as const;
export const COLOR_FILTER = 'Color Filter' as const;
export const PAGE_TYPE = 'Page Type' as const;
export const SEARCHBAR_PLACE_HOLDER = 'Search on LINER' as const;
export const SEARCH_TAGS_PLACE_HOLDER = 'Search tags' as const;
export const SEARCH_MY_HIGHLIGHTS_PLACE_HOLDER =
  'Search my highlights' as const;
export const RESET = 'Reset' as const;
export const APPLY = 'Apply' as const;
export const VIEW_ORIGINAL = 'View Original' as const;
export const LEFT_MENU_WIDTH = 232;

export const LeftMenuList: MenuListProps[] = [
  { name: FOR_YOU, to: '/home' },
  { name: MY_HIGHLIGHTS, to: '/myhighlights/highlights' },
  { name: MORE, to: '/more' },
];

export const FOR_YOU_PAGE_SUBTITLE = 'Picked by LINER, just for you' as const;
export const FOR_YOU_TITLE_DROPBOX = {
  title: 'Languages',
  description: 'Select for feed',
  options: [
    { optionName: 'English', isSelected: true },
    { optionName: '한국어', isSelected: false },
    { optionName: '简体字', isSelected: false },
    { optionName: '繁體字', isSelected: false },
    { optionName: '日本語', isSelected: false },
    { optionName: 'Others', isSelected: false },
  ],
};

export const ADD_TAGS = '+ Add Tags' as const;
export const SHARE_ORIGINAL_PAGE = 'Share Original Page' as const;
export const DUMMY_COPY_URL =
  'https://www.webmd.com/cold-and-flu/features/what-is-pandemic' as const;
export const COPY = 'COPY' as const;

export const TRENDING_KEYWORDS = 'Trending Keywords' as const;
export const TRENDING_PAGES = 'Trending Pages' as const;

export const MORE_PAGES_LIKE_THIS = 'More pages like this' as const;
export const FEWER_PAGES_LIKE_THIS = 'Fewer pages like this' as const;
export const HIDE_THIS_PAGE = 'Hide this page' as const;

export const SIGNAL_SUBTITLE =
  "We recommend you pages you'll love and need. The more you highlight, the smarter our algorithm gets." as const;
export const HIGHLIGHTS_SUBTITLE =
  'All your work, including highlights and comments will be safely stored on this page.' as const;

export const MY_HIGHLIGHTS_SUBTITLE = '2 Pages 2 Highlights' as const;
export const TAB_MENU_LIST: MenuListProps[] = [
  { name: 'Highlights', to: '/myhighlights/highlights' },
  { name: 'Tags', to: '/myhighlights/tags' },
];

export const FILTER_COLOR_LIST = [
  { name: 'Yellow', colorCode: '#ffff83', isLocked: false },
  { name: 'Mint', colorCode: '#a6ffe9', isLocked: false },
  { name: 'Orange', colorCode: '#ffc7ba', isLocked: true },
  { name: 'Violet', colorCode: '#d9c3ff', isLocked: true },
  { name: 'Blue', colorCode: '#b8dcff', isLocked: true },
  { name: 'Pink', colorCode: '#ffd0ef', isLocked: true },
];

export const PAGE_TYPE_LIST = [
  { name: 'Web', iconName: 'web-filter-selected' },
  { name: 'PDF', iconName: 'pdf-filter-selected' },
];
