import ArrowLeftIcon from 'assets/icons/arrowLeft.svg?svgr';
import { IconButton } from 'components';
import { researchesStore } from 'stores';
import s from './createResearchScreen.scss';

export const CreateResearchScreen: IFC = () => {
  const { toggleCreateResearchScreen } = researchesStore;
  return (
    <div className={s.container}>
      <div className={s.header}>
        <IconButton
          onClick={toggleCreateResearchScreen}
          variant="ghost"
          size="small"
        >
          <ArrowLeftIcon />
        </IconButton>
        <span className={s.title}>Создать исследование</span>
        <div className={s.placeholder}></div>
      </div>
    </div>
  );
};
