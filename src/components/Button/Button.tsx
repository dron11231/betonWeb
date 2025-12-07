import React, { JSX } from 'react';
import classNames from 'classnames';
import { Loader } from 'components/Loader';
import s from './button.scss';

type TIconSide = 'left' | 'right';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  size?: TSizeType;
  icon?: JSX.Element;
  iconSide?: TIconSide;
}

export const Button: IFC<IButtonProps> = (props) => {
  const {
    children,
    size = 'medium',
    isLoading,
    icon,
    className,
    iconSide = 'left',
    onClick,
  } = props;
  const iconLeftSide = !!icon && iconSide === 'left';
  const iconRightSide = !!icon && iconSide === 'right';
  return (
    <button
      className={classNames(className, s.button, s[size])}
      onClick={onClick}
      disabled={isLoading}
    >
      {isLoading && <Loader />}
      <div className={s.buttonContent}>
        {iconLeftSide && <div className={s.iconWrapper}>{icon}</div>}
        <span className={s.buttonText}>{children}</span>
        {iconRightSide && <div className={s.iconWrapper}>{icon}</div>}
      </div>
    </button>
  );
};

Button.displayName = 'Button';
