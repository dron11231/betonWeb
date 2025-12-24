import { useEffect } from 'react';
import { homePageStore, researchesStore, userStore } from 'stores';
import { observer } from 'utils';
import { RecentResearches } from './components';
import s from './homePage.scss';

export const HomePage: IFC = observer(() => {
  useEffect(() => {
    if (userStore.userData?.userId) {
      homePageStore.getRecentResearchesList();
    }
  }, [userStore.userData?.userId]);

  return (
    <div className={s.container}>
      <RecentResearches researchesList={researchesStore.researchesList} />
    </div>
  );
}, 'HomePage');
