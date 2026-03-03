import { Link } from 'react-router-dom';
import { routerPaths } from 'routes/routerPaths';
import s from './researchNavigation.scss';

export const ResearchNavigation: IFC = () => {
  return (
    <nav className={s.researchNavigation}>
      <Link to={routerPaths.Research.Constructor}>Конструктор</Link>
    </nav>
  );
};

ResearchNavigation.displayName = 'ResearchNavigation';
