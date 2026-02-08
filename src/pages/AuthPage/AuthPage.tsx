import { Navigate } from 'react-router-dom';
import GoogleIcon from 'assets/icons/googleIcon.svg?svgr';
import LayersIcon from 'assets/icons/layersIcon.svg?svgr';
import { Button } from 'components';
import { PrivateContainer } from 'containers';
import { routerPaths } from 'routes/routerPaths';
import { authStore, userStore } from 'stores';
import { IAuthData } from 'stores/AuthStore/types';
import { observer } from 'utils';
import { AuthForm } from './components';
import { EAuthProcessTypes } from './types';
import s from './authPage.scss';

interface IAuthPageProps {
  authProccessType: EAuthProcessTypes;
}

export const AuthPage: IFC<IAuthPageProps> = observer((props) => {
  const { authProccessType } = props;

  const handleSubmit = (formData: IAuthData) => {
    authStore.fetchAuthData(formData, authProccessType);
  };

  if (userStore.userData?.userId) {
    return <Navigate to={routerPaths.App.Root} replace />;
  }

  return (
    <PrivateContainer hideLoader>
      <div className={s.container} data-testid="auth-page">
        <div className={s.formContainer}>
          <div className={s.welcomeBlock}>
            <div className={s.iconWrapper}>
              <LayersIcon />
            </div>
            <div className={s.welcomeText}>
              <h2>Добро пожаловать</h2>
              <span className={s.description}>
                Войдите в свой аккаунт, чтобы продолжить
              </span>
            </div>
          </div>
          <div className={s.alternateAuthButtons}>
            <Button
              variant="ghost"
              className={s.authButton}
              size="large"
              icon={<GoogleIcon />}
            >
              Войти с помощью Google
            </Button>
          </div>
          <div className={s.separator}>или через email</div>
          <AuthForm
            authProccessType={authProccessType}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </PrivateContainer>
  );
}, 'AuthPage');
