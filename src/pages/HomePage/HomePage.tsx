import { useEffect } from 'react';
import { homePageStore } from 'stores';
import { observer } from 'utils';
import s from './homePage.scss';

export const HomePage: IFC = observer(() => {
  useEffect(() => {
    homePageStore.getRecentResearchesList();
  }, []);

  return <div className={s.container}>HomePage</div>;
}, 'HomePage');
