import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { Link, useLocation } from 'react-router-dom';
import BagIcon from 'assets/icons/bag.svg?svgr';
import HeartIcon from 'assets/icons/heartIcon.svg?svgr';
import HomeIcon from 'assets/icons/homeIcon.svg?svgr';
import TrashIcon from 'assets/icons/trash.svg?svgr';
import { PrivateContainer } from 'containers';
import { CreateResearchScreen } from 'modules';
import { routerPaths } from 'routes/routerPaths';
import { researchesStore } from 'stores';
import s from './mainNavigation.scss';

export const MainNavigation: IFC = observer((props) => {
  const { children } = props;
  const { pathname } = useLocation();
  const { isCreateResearchOpen } = researchesStore;

  return (
    <>
      <div className={s.navigationLayout}>
        <nav className={s.navigation}>
          <Link
            className={classNames(s.link, {
              [s.active]: pathname === routerPaths.Home,
            })}
            to={routerPaths.Home}
          >
            <HomeIcon />
            Главная
          </Link>
          <Link
            className={classNames(s.link, {
              [s.active]: pathname === routerPaths.Favorites,
            })}
            to={routerPaths.Favorites}
          >
            <HeartIcon />
            Избранное
          </Link>
          <Link
            className={classNames(s.link, {
              // [s.active]: pathname === routerPaths.Researches,
            })}
            to={'/'}
          >
            <BagIcon />
            Рабочие области
          </Link>
          <Link
            className={classNames(s.link, {
              // [s.active]: pathname === routerPaths.Researches,
            })}
            to={'/'}
          >
            <TrashIcon />
            Корзина
          </Link>
        </nav>
        <PrivateContainer>{children}</PrivateContainer>
      </div>
      {isCreateResearchOpen && <CreateResearchScreen />}
    </>
  );
});

MainNavigation.displayName = 'MainNavigation';
