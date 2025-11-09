import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainNavigation } from 'containers';
import { AuthPage, HomePage, ResearchesPage } from 'pages';
import { EAuthProcessTypes } from 'pages/AuthPage/types';
import { routerPaths } from './routerPaths';

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
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
            <HomePage />
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
);
