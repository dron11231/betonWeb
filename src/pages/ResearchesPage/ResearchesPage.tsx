import { useMutation } from '@tanstack/react-query';
import { toJS } from 'mobx';
import { researchApi } from 'api/researchApi';
import { TCreateResearchData } from 'api/researchApi/types';
import { researchesStore } from 'stores';
import { observer } from 'utils';
import { ResearchesEmpty } from './components';
import s from './researchesPage.scss';

export const ResearchesPage: IFC = observer(() => {
  const { researchesList } = researchesStore;
  const createNewResearch = useMutation({
    mutationFn: (newResearchData: TCreateResearchData) =>
      researchApi.createResearch(newResearchData),
    onSuccess: (responseData) =>
      researchesStore.createNewResearch(responseData.data.payload),
  });

  return (
    <div className={s.researchesContainer}>
      {!researchesList.length && (
        <ResearchesEmpty onCreateResearch={createNewResearch.mutate} />
      )}
    </div>
  );
}, 'ResearchesPage');
