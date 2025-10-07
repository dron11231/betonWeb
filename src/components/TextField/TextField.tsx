import { JSX } from 'react';
import classNames from 'classnames';
import s from './textField.scss';

interface ITextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  value: string;
  label?: string;
  labelInner?: string;
  size?: TSizeType;
  icon?: JSX.Element;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: IFC<ITextFieldProps> = (props) => {
  const {
    value,
    label,
    size = 'medium',
    name,
    icon,
    labelInner,
    type,
    placeholder,
    onChange,
  } = props;

  return (
    <div className={classNames(s.container, s[size])}>
      <label
        htmlFor={name}
        className={classNames(s.label, { [s.hidden]: !label })}
      >
        {label}
      </label>
      <div className={s.inputWrapper}>
        <input
          id={name}
          className={s.input}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          type={type}
        />
        {!!icon && <div className={s.icon}>{icon}</div>}
        {!!labelInner && <span className={s.innerLabel}>{labelInner}</span>}
      </div>
    </div>
  );
};

TextField.displayName = 'TextField';
