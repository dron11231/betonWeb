import { observer } from 'mobx-react-lite';
import { INavigationLink, Navigation } from 'components';
import s from './researchPage.scss';

export const ResearchPage: IFC = observer((props) => {
  const { children } = props;

  const links: INavigationLink[] = [
    {
      text: 'Конструктор',
      // isActive: currentPage === routerPaths.App.Home,
      to: '',
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

  return (
    <div className={s.container}>
      {children}
      <Navigation links={links} />
    </div>
  );
});

ResearchPage.displayName = 'ResearchPage';
