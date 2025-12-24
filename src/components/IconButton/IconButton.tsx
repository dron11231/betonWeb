import classNames from 'classnames';
import s from './iconButton.scss';

interface IIconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: TSizeType;
  variant?: TVariantType;
}

export const IconButton: IFC<IIconButtonProps> = (props) => {
  const {
    size = 'medium',
    variant = 'secondary',
    children,
    className,
    ...otherProps
  } = props;

  return (
    <button
      className={classNames(className, s.button, s[size], s[variant])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
