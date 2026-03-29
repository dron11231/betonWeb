import { generatePath } from 'react-router-dom';
import { INavigationLink } from 'components';
import { routerPaths } from 'routes/routerPaths';

export const generateLinks = (researchId: string): INavigationLink[] => [
  {
    text: 'Конструктор',
    // isActive: currentPage === routerPaths.App.Home,
    to: generatePath(routerPaths.Research.Constructor.absolute, { id: researchId }),
    // icon: <HomeIcon />,
  },
  {
    text: 'Логики',
    // isActive: currentPage === routerPaths.App.Favorites,
    to: '',
    // icon: <HeartIcon />,
  },
  {
    text: 'Каналы',
    // isActive: pathname === routerPaths.Researches,
    to: '',
    // icon: <BagIcon />,
  },
  {
    text: 'Статистика',
    // isActive: pathname === routerPaths.Researches,
    to: '',
    // icon: <TrashIcon />,
  },
];
