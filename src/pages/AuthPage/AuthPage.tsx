import GoogleIcon from 'assets/icons/googleIcon.svg?svgr';
import { Button } from 'components';
import { SignUpScreen } from './components';
import s from './authPage.scss';

export const AuthPage = () => {
  return (
    <div className={s.container}>
      <div className={s.formContainer}>
        <div className={s.alternateAuthButtons}>
          <Button className={s.authButton} size="large" icon={<GoogleIcon />}>
            Войти с помощью Google
          </Button>
        </div>
        <div className={s.separator}>или</div>
        <SignUpScreen />
      </div>
    </div>
  );
};
