import { BrowserRouter, Navigate, Outlet, Route, Routes } from 'react-router-dom';
import { Header, MainNavigation } from 'modules';
import { AuthPage, HomePage, ResearchPage, ResearchesListPage } from 'pages';
import { EAuthProcessTypes } from 'pages/AuthPage/types';
import { userStore } from 'stores';
import { observer } from 'utils';
import { ResearchRouter } from './ResearchRouter';
import { routerPaths } from './routerPaths';

export const MainRouter = observer(
  () => (
    <BrowserRouter>
      <Routes>
        <Route path={routerPaths.Root} element={<Navigate to={routerPaths.App.Root} />} />
        <Route path={routerPaths.SignIn} element={<AuthPage authProccessType={EAuthProcessTypes.SignIn} />} />
        <Route path={routerPaths.SignUp} element={<AuthPage authProccessType={EAuthProcessTypes.SignUp} />} />
        <Route
          path={routerPaths.Research.Root}
          element={
            <Header>
              <ResearchPage>
                <ResearchRouter />
              </ResearchPage>
            </Header>
          }
        />
        <Route
          path={routerPaths.App.Root}
          element={
            <Header>
              <MainNavigation>
                <Outlet />
              </MainNavigation>
            </Header>
          }
        >
          <Route index element={<Navigate to={routerPaths.App.Home} replace />} />
          <Route path={routerPaths.App.Home} element={<HomePage userId={userStore.userData?.userId} />} />
          <Route path={routerPaths.App.Favorites} element={<ResearchesListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  ),
  'MainRouter'
);
