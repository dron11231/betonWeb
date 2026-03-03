import { observer } from 'mobx-react-lite';
import { PathMatch, useMatch } from 'react-router-dom';
import BagIcon from 'assets/icons/bag.svg?svgr';
import HeartIcon from 'assets/icons/heartIcon.svg?svgr';
import HomeIcon from 'assets/icons/homeIcon.svg?svgr';
import TrashIcon from 'assets/icons/trash.svg?svgr';
import { INavigationLink, Navigation } from 'components';
import { PrivateContainer } from 'containers';
import { useCreateResearch } from 'hooks';
import { routerPaths } from 'routes/routerPaths';
import { CreateResearchScreen } from 'screens';
import s from './mainNavigation.scss';

export const MainNavigation: IFC = observer((props) => {
  const { children } = props;
  const { params } = useMatch('/app/*') as PathMatch;
  const { isCreateResearchOpen } = useCreateResearch();
  const currentPage = params['*'];

  const links: INavigationLink[] = [
    {
      text: 'Главная',
      isActive: currentPage === routerPaths.App.Home,
      to: routerPaths.App.Home,
      icon: <HomeIcon />,
    },
    {
      text: 'Избранное',
      isActive: currentPage === routerPaths.App.Favorites,
      to: routerPaths.App.Favorites,
      icon: <HeartIcon />,
    },
    {
      text: 'Рабочие области',
      // isActive: pathname === routerPaths.Researches,
      to: '',
      icon: <BagIcon />,
    },
    {
      text: 'Корзина',
      // isActive: pathname === routerPaths.Researches,
      to: '',
      icon: <TrashIcon />,
    },
  ];

  return (
    <>
      <div className={s.navigationLayout}>
        <PrivateContainer>{children}</PrivateContainer>
        <Navigation links={links} />
      </div>
      {isCreateResearchOpen && <CreateResearchScreen />}
    </>
  );
});

MainNavigation.displayName = 'MainNavigation';
