import classNames from 'classnames';
import s from './textField.scss';

interface ITextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value: string;
  label?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const TextField: IFC<ITextFieldProps> = (props) => {
  const { value, label, onChange } = props;

  return (
    <div className={s.container}>
      <label className={classNames(s.label, { [s.hidden]: !label })}>
        {label}
      </label>
      <input className={s.input} value={value} onChange={onChange} />
    </div>
  );
};
