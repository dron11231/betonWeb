import { observer } from 'mobx-react-lite';
import { ResearchNavigation } from './components';
import s from './researchPage.scss';

export const ResearchPage: IFC = observer((props) => {
  const { children } = props;

  return (
    <div className={s.container}>
      {children}
      <ResearchNavigation />
    </div>
  );
});

ResearchPage.displayName = 'ResearchPage';
