import { observer } from 'utils';
import s from './homePage.scss';

export const HomePage: IFC = observer(() => {
  return <div className={s.container}>HomePage</div>;
}, 'HomePage');
