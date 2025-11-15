import BiotechIcon from '@mui/icons-material/Biotech';
import HomeIcon from '@mui/icons-material/Home';
import classNames from 'classnames';
import { Link, useLocation } from 'react-router-dom';
import { PrivateContainer } from 'containers';
import { routerPaths } from 'routes/routerPaths';
import s from './mainNavigation.scss';

export const MainNavigation: IFC = (props) => {
  const { children } = props;
  const { pathname } = useLocation();

  return (
    <div className={s.navigationWrapper}>
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
            [s.active]: pathname === routerPaths.Researches,
          })}
          to={routerPaths.Researches}
        >
          <BiotechIcon />
        </Link>
      </nav>
      <PrivateContainer>{children}</PrivateContainer>
    </div>
  );
};
