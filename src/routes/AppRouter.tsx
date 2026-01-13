import { Navigate, Route, Routes } from 'react-router-dom';
import { HomePage, ResearchesPage } from 'pages';
import { userStore } from 'stores';
import { routerPaths } from './routerPaths';

export const AppRouter: IFC = () => (
  <Routes>
    <Route element={<Navigate to={routerPaths.App.Home} />} />
    <Route
      path={routerPaths.App.Home}
      element={<HomePage userId={userStore.userData?.userId} />}
    />
    <Route path={routerPaths.App.Favorites} element={<ResearchesPage />} />
  </Routes>
);
