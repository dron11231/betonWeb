import ArrowLeftIcon from 'assets/icons/arrowLeft.svg?svgr';
import { IconButton } from 'components';
import { useCreateResearch } from 'hooks';
import s from './createResearchScreen.scss';

export const CreateResearchScreen: IFC = () => {
  const { closeCreateResearch } = useCreateResearch();
  return (
    <div className={s.container}>
      <div className={s.header}>
        <IconButton onClick={closeCreateResearch} variant="ghost" size="small">
          <ArrowLeftIcon />
        </IconButton>
        <span className={s.title}>Создать исследование</span>
        <div className={s.placeholder}></div>
      </div>
    </div>
  );
};
