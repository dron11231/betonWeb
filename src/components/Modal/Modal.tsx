import CloseIcon from '@mui/icons-material/Close';
import classNames from 'classnames';
import ReactDOM from 'react-dom';
import { IconButton } from 'components/IconButton';
import s from './modal.scss';

interface IModalProps {
  modalName: string;
  onClose?: () => void;
}

export const Modal: IFC<IModalProps> = (props) => {
  const { className, modalName, children, onClose } = props;

  const overlayPortal = ReactDOM.createPortal(
    <div className={s.overlay} />,
    document.body
  );

  return (
    <>
      {overlayPortal}
      <div className={classNames(s.modal, className)}>
        <div className={s.modalHeader}>
          <h3 className={s.modalName}>{modalName}</h3>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <div className={s.modalBody}>{children}</div>
      </div>
    </>
  );
};
