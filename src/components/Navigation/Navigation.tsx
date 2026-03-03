import classNames from 'classnames';
import { observer } from 'mobx-react-lite';
import { Link } from 'react-router-dom';
import { INavigationLink } from './types';
import s from './navigation.scss';

interface INavigationProps {
  links: INavigationLink[];
}

export const Navigation: IFC<INavigationProps> = observer((props) => {
  const { links } = props;

  return (
    <nav className={s.navigation}>
      {links.map((link) => (
        <Link
          key={link.text}
          className={classNames(s.link, {
            [s.active]: link.isActive,
          })}
          to={link.to}
        >
          {link.icon}
          {link.text}
        </Link>
      ))}
    </nav>
  );
});

Navigation.displayName = 'Navigation';
