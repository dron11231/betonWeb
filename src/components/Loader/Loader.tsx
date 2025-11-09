import { CircularProgress } from '@mui/material';
import s from './loader.scss';

interface ILoaderProps {
  size?: string | number;
  overlayColor?: string;
}

export const Loader: IFC<ILoaderProps> = (props) => {
  const { size } = props;
  const currentSize = size || 30;

  return (
    <div className={s.overlay}>
      <CircularProgress size={currentSize} />
    </div>
  );
};
