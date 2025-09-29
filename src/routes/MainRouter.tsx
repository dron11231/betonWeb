import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AuthPage } from 'pages';
import { MainPage } from 'pages/MainPage';

export const MainRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/auth" element={<AuthPage />} />
    </Routes>
  </BrowserRouter>
);
