import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { MainNavigation } from 'containers';
import { AuthPage, HomePage, ResearchesPage } from 'pages';
import { EAuthProcessTypes } from 'pages/AuthPage/types';
import { userStore } from 'stores';
import { observer } from 'utils';
import { routerPaths } from './routerPaths';

export const MainRouter = observer(
  () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path={routerPaths.SignIn}
          element={<AuthPage authProccessType={EAuthProcessTypes.SignIn} />}
        />
        <Route
          path={routerPaths.SignUp}
          element={<AuthPage authProccessType={EAuthProcessTypes.SignUp} />}
        />
        <Route
          path={routerPaths.Home}
          element={
            <MainNavigation>
              <HomePage userId={userStore.userData?.userId} />
            </MainNavigation>
          }
        />
        <Route
          path={routerPaths.Researches}
          element={
            <MainNavigation>
              <ResearchesPage />
            </MainNavigation>
          }
        />
      </Routes>
    </BrowserRouter>
  ),
  'MainRouter'
);
