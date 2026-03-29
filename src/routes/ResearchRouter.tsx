import { Route, Routes } from 'react-router-dom';
import { routerPaths } from './routerPaths';

export const ResearchRouter: IFC = () => (
  <Routes>
    <Route path={routerPaths.Research.Constructor.relative} element={<div>123</div>} />
  </Routes>
);

ResearchRouter.displayName = 'ResearchRouter';
