import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import BagIcon from 'assets/icons/bag.svg?svgr';
import HeartIcon from 'assets/icons/heartIcon.svg?svgr';
import HomeIcon from 'assets/icons/homeIcon.svg?svgr';
import TrashIcon from 'assets/icons/trash.svg?svgr';
import { PrivateContainer } from 'containers';
import { routerPaths } from 'routes/routerPaths';
import s from './mainNavigation.scss';

export const MainNavigation: IFC = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <div>
      <nav className={s.navigation}>
        <Link
          className={classNames(s.link, {
            [s.active]: pathname === routerPaths.Home,
          })}
          to={routerPaths.Home}
        >
          <HomeIcon />
        </Link>
        <Link
          className={classNames(s.link, {
            [s.active]: pathname === routerPaths.Favorites,
          })}
          to={routerPaths.Favorites}
        >
          <HeartIcon />
        </Link>
        <Link
          className={classNames(s.link, {
            // [s.active]: pathname === routerPaths.Researches,
          })}
          to={'/'}
        >
          <BagIcon />
        </Link>
        <Link
          className={classNames(s.link, {
            // [s.active]: pathname === routerPaths.Researches,
          })}
          to={'/'}
        >
          <TrashIcon />
        </Link>
      </nav>
      <PrivateContainer>{children}</PrivateContainer>
    </div>
  );
};
