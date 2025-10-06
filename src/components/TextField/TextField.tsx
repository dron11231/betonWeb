import { JSX } from 'react';
import classNames from 'classnames';
import s from './textField.scss';

interface ITextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  value: string;
  label?: string;
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
        {!!icon && <div className={s.icon}>{icon}</div>}
        {!!placeholder && <span className={s.placeholder}>{placeholder}</span>}
        <input
          id={name}
          className={s.input}
          value={value}
          onChange={onChange}
          type={type}
        />
      </div>
    </div>
  );
};

TextField.displayName = 'TextField';
