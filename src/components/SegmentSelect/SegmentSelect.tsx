import { Button } from 'components/Button';
import { ISegmentButtonData } from './types';
import s from './segmentSelect.scss';

interface ISegmentSelectProps {
  buttonsList: ISegmentButtonData[];
  value: number | string;
  label?: string;
  size?: TSizeType;
  onChange?: (value: string | number) => void;
}

export const SegmentSelect: IFC<ISegmentSelectProps> = (props) => {
  const { buttonsList, value, size, label, onChange } = props;

  const handleChange = (newValue: string | number) => () => onChange?.(newValue);

  return (
    <div className={s.container}>
      {label && <span className={s.label}>{label}</span>}
      <div className={s.buttonsWrapper}>
        {buttonsList.map((buttonData) => {
          const buttonVariant = buttonData.value === value ? 'primary' : 'secondary';
          return (
            <Button
              size={size}
              onClick={handleChange(buttonData.value)}
              variant={buttonVariant}
              key={buttonData.value}
              {...buttonData}
            >
              {buttonData.text}
            </Button>
          );
        })}
      </div>
    </div>
  );
};
