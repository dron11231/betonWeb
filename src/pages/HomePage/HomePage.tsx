import { useEffect } from 'react';
import { homePageStore, userStore } from 'stores';
import { observer } from 'utils';
import s from './homePage.scss';

export const HomePage: IFC = observer(() => {
  useEffect(() => {
    if (userStore.userData?.userId) {
      homePageStore.getRecentResearchesList();
    }
  }, [userStore.userData?.userId]);

  return <div className={s.container}>HomePage</div>;
}, 'HomePage');
