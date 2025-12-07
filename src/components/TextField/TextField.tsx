import { JSX } from 'react';
import classNames from 'classnames';
import s from './textField.scss';

interface ITextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  value: string;
  label?: string;
  labelInner?: string;
  size?: TSizeType;
  ref?: React.Ref<HTMLInputElement>;
  error?: string | null;
  iconLeft?: JSX.Element;
  iconRight?: JSX.Element;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: IFC<ITextFieldProps> = (props) => {
  const {
    value,
    label,
    size = 'medium',
    name,
    iconLeft,
    iconRight,
    ref,
    error,
    labelInner,
    type,
    placeholder,
    className,
    onChange,
    ...otherProps
  } = props;

  return (
    <div className={classNames(className, s.container, s[size])}>
      {label && (
        <label
          htmlFor={name}
          className={classNames(s.label, { [s.hidden]: !label })}
        >
          {label}
        </label>
      )}
      <div>
        <div className={s.inputWrapper}>
          <input
            ref={ref}
            id={name}
            className={classNames(s.input, { [s.error]: !!error })}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            type={type}
            {...otherProps}
          />
          {!!iconLeft && (
            <div className={classNames(s.icon, s.left)}>{iconLeft}</div>
          )}
          {!!iconRight && (
            <div className={classNames(s.icon, s.right)}>{iconRight}</div>
          )}
          {!!labelInner && <span className={s.innerLabel}>{labelInner}</span>}
        </div>
        {!!error && <span className={s.errorText}>{error}</span>}
      </div>
    </div>
  );
};

TextField.displayName = 'TextField';
