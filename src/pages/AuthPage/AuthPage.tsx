import GoogleIcon from 'assets/icons/googleIcon.svg?svgr';
import { Button } from 'components';
import { authStore, userStore } from 'stores';
import { IAuthData } from 'stores/AuthStore/types';
import { AuthForm } from './components';
import { EAuthProccessTypes } from './types';
import s from './authPage.scss';

export const AuthPage = () => {
  const handleSubmit = (formData: IAuthData) => {
    // В зависимости от path отправляем или рест на регистрацию или на авторизацию
    authStore.fetchSignUpData(formData);
  };
  console.log(authStore.isLoggedIn);
  console.log(userStore.userData);

  return (
    <div className={s.container}>
      <div className={s.formContainer}>
        <div className={s.alternateAuthButtons}>
          <Button className={s.authButton} size="large" icon={<GoogleIcon />}>
            Войти с помощью Google
          </Button>
        </div>
        <div className={s.separator}>или</div>
        <AuthForm
          authProccessType={EAuthProccessTypes.SignUp}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};
