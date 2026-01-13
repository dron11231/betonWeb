import { IButtonProps } from 'components/Button';

export interface ISegmentButtonData extends Partial<IButtonProps> {
  text: string;
  value: string | number;
}
