import { researchesStore } from 'stores';
import { observer } from 'utils';
import { ResearchesEmpty } from './components';
import s from './researchesListPage.scss';

export const ResearchesListPage: IFC = observer(() => {
  const { researchesList } = researchesStore;

  return (
    <div className={s.researchesContainer}>
      {!researchesList.length && <ResearchesEmpty onCreateResearch={researchesStore.createNewResearch} />}
    </div>
  );
}, 'ResearchesListPage');
