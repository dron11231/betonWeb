import { SignUpScreen } from './components';
import s from './authPage.scss';

export const AuthPage = () => {
  return (
    <div className={s.container}>
      <SignUpScreen />
    </div>
  );
};
