import { useState } from 'react';
import { TCreateResearchData } from 'api/researchApi/types';
import { Button } from 'components';
import { CreateResarchModal } from 'modules';
import s from './researchesEmpty.scss';

interface IResearchesEmptyProps {
  onCreateResearch: (newResearchData: TCreateResearchData) => void;
}

export const ResearchesEmpty: IFC<IResearchesEmptyProps> = (props) => {
  const { onCreateResearch } = props;
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleModalOpen = () => {
    setModalOpen((previousState) => !previousState);
  };

  console.log(isModalOpen);

  return (
    <div className={s.researchEmpty}>
      <div className={s.createFirstResearchContainer}>
        <span>
          У вас пока нет исследований. <br /> Создайте первое!
        </span>
        <Button onClick={toggleModalOpen}>Создать исследование</Button>
      </div>
      {isModalOpen && <CreateResarchModal onClose={toggleModalOpen} />}
    </div>
  );
};
