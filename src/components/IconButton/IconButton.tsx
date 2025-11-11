import classNames from 'classnames';
import s from './iconButton.scss';

interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TSizeType;
}

export const IconButton: IFC<IIconButtonProps> = (props) => {
  const { size = 'medium', children, className } = props;

  return (
    <button className={classNames(className, s.button, s[size])} {...props}>
      {children}
    </button>
  );
};
