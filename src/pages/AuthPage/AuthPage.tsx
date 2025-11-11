import { toJS } from 'mobx';
import { Navigate } from 'react-router-dom';
import GoogleIcon from 'assets/icons/googleIcon.svg?svgr';
import { Button } from 'components';
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
  console.log('isLoading', authStore.isLoading);
  console.log('userStore', toJS(userStore.userData));

  if (userStore.userData?.userId) {
    return <Navigate to={routerPaths.Home} />;
  }

  return (
    <div className={s.container} data-testid="auth-page">
      <div className={s.formContainer}>
        <div className={s.alternateAuthButtons}>
          <Button className={s.authButton} size="large" icon={<GoogleIcon />}>
            Войти с помощью Google
          </Button>
        </div>
        <div className={s.separator}>или</div>
        <AuthForm authProccessType={authProccessType} onSubmit={handleSubmit} />
      </div>
    </div>
  );
}, 'AuthPage');
