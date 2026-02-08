import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { Link, PathMatch, useMatch } from 'react-router-dom';
import BagIcon from 'assets/icons/bag.svg?svgr';
import HeartIcon from 'assets/icons/heartIcon.svg?svgr';
import HomeIcon from 'assets/icons/homeIcon.svg?svgr';
import TrashIcon from 'assets/icons/trash.svg?svgr';
import { PrivateContainer } from 'containers';
import { useCreateResearch } from 'hooks';
import { CreateResearchScreen } from 'modules';
import { routerPaths } from 'routes/routerPaths';
import s from './mainNavigation.scss';

export const MainNavigation: IFC = observer((props) => {
  const { children } = props;
  const { params } = useMatch('/app/*') as PathMatch;
  const { isCreateResearchOpen } = useCreateResearch();
  const currentPage = params['*'];

  return (
    <>
      <div className={s.navigationLayout}>
        <nav className={s.navigation}>
          <Link
            className={classNames(s.link, {
              [s.active]: currentPage === routerPaths.App.Home,
            })}
            to={routerPaths.App.Home}
          >
            <HomeIcon />
            Главная
          </Link>
          <Link
            className={classNames(s.link, {
              [s.active]: currentPage === routerPaths.App.Favorites,
            })}
            to={routerPaths.App.Favorites}
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
