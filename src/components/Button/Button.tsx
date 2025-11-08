import React, { JSX } from 'react';
import classNames from 'classnames';
import s from './button.scss';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  isLoading?: boolean;
  size?: TSizeType;
  icon?: JSX.Element;
}

export const Button: IFC<IButtonProps> = (props) => {
  const { children, size = 'medium', icon, className } = props;

  return (
    <button className={classNames(className, s.button, s[size])}>
      <div className={s.buttonContent}>
        <span className={s.buttonText}>{children}</span>
        {!!icon && <div className={s.iconWrapper}>{icon}</div>}
      </div>
    </button>
  );
};

Button.displayName = 'Button';
