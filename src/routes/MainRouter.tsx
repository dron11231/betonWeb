import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Header, MainNavigation } from 'containers';
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
        {/* TODO: Все роуты ниже нужно вынести в отдельный роутер, который будет обёрнут Header и MainNavigation, после этого нужно вынести CreateResearchScreen из MainNavigation */}
        <Route
          path={routerPaths.Home}
          element={
            <Header>
              <MainNavigation>
                <HomePage userId={userStore.userData?.userId} />
              </MainNavigation>
            </Header>
          }
        />
        <Route
          path={routerPaths.Favorites}
          element={
            <Header>
              <MainNavigation>
                <ResearchesPage />
              </MainNavigation>
            </Header>
          }
        />
      </Routes>
    </BrowserRouter>
  ),
  'MainRouter'
);
