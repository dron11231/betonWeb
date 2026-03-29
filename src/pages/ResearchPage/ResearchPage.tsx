import { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { generatePath, useNavigate, useParams } from 'react-router-dom';
import { Navigation } from 'components';
import { routerPaths } from 'routes/routerPaths';
import { researchesStore } from 'stores';
import { generateLinks } from './helpers';
import s from './researchPage.scss';

export const ResearchPage: IFC = observer((props) => {
  const { children } = props;

  const { getCurrentResearch } = researchesStore;

  const { id: researchId } = useParams();
  const navigate = useNavigate();

  const navigationLinks = generateLinks(researchId!);

  useEffect(() => {
    if (researchId) {
      getCurrentResearch(Number(researchId)).then(() => {
        navigate(generatePath(routerPaths.Research.Constructor.absolute, { id: researchId }));
      });
    }
  }, [researchId]);

  return (
    <div className={s.container}>
      {children}
      <Navigation links={navigationLinks} />
    </div>
  );
});

ResearchPage.displayName = 'ResearchPage';
