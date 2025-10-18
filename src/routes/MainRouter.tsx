import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthPage } from 'pages';
import { EAuthProccessTypes } from 'pages/AuthPage/types';
import { DashboardPage } from 'pages/DashboardPage';

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<DashboardPage />} />
      <Route
        path="/signIn"
        element={<AuthPage authProccessType={EAuthProccessTypes.SignIn} />}
      />
      <Route
        path="/signUp"
        element={<AuthPage authProccessType={EAuthProccessTypes.SignUp} />}
      />
    </Routes>
  </BrowserRouter>
);
