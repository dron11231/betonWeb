import React, { JSX } from 'react';
import classNames from 'classnames';
import { Loader } from 'components/Loader';
import s from './button.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  isLoading?: boolean;
  size?: TSizeType;
  icon?: JSX.Element;
}

export const Button: IFC<IButtonProps> = (props) => {
  const {
    children,
    size = 'medium',
    isLoading,
    icon,
    className,
    onClick,
  } = props;
  return (
    <button
      className={classNames(className, s.button, s[size])}
      onClick={onClick}
    >
      {isLoading && <Loader />}
      <div className={s.buttonContent}>
        <span className={s.buttonText}>{children}</span>
        {!!icon && <div className={s.iconWrapper}>{icon}</div>}
      </div>
    </button>
  );
};

Button.displayName = 'Button';
