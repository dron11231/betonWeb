import { Modal } from 'components';
import s from './createResearchModal.scss';

interface ICreateResearchModalProps {
  onClose: () => void;
}

export const CreateResarchModal: IFC<ICreateResearchModalProps> = (props) => {
  const { onClose } = props;

  return (
    <Modal
      className={s.modal}
      onClose={onClose}
      modalName="Создание исследования"
    >
      Test
    </Modal>
  );
};
