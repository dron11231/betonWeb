import { useRef, useState } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from 'react-router-dom';
import KeyIcon from 'assets/icons/keyIcon.svg?svgr';
import MailIcon from 'assets/icons/mailIcon.svg?svgr';
import { Button, IconButton, TextField } from 'components';
import { EAuthProcessTypes } from 'pages/AuthPage/types';
import { authStore } from 'stores';
import { EErrorAuthFieldTypes, IAuthData } from 'stores/AuthStore/types';
import { observer } from 'utils';
import { submitButtonTextsMap } from './constants';
import s from './authForm.scss';

interface IAuthFormProps {
  authProccessType: EAuthProcessTypes;
  onSubmit: (formData: IAuthData) => void;
}

const redirectLinksMap = {
  [EAuthProcessTypes.SignIn]: (
    <span className={s.offerToRegister}>
      Нет аккаунта?{' '}
      <Link className={s.link} to="/signUp">
        Зарегистрируйтесь!
      </Link>
    </span>
  ),
  [EAuthProcessTypes.SignUp]: (
    <span className={s.offerToRegister}>
      Уже есть аккаунт?{' '}
      <Link className={s.link} to="/signIn">
        Авторизируйтесь!
      </Link>
    </span>
  ),
};

export const AuthForm: IFC<IAuthFormProps> = observer((props) => {
  const { authProccessType, onSubmit } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);
  const submitButtonText = submitButtonTextsMap[authProccessType];
  const passwordInputType = passwordVisible ? 'text' : 'password';

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    event.preventDefault();
    setEmail(value);
  };

  const handleEmailKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();

      if (passwordInputRef.current) {
        passwordInputRef.current.focus();
      }
    }
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setPassword(value);
  };

  const togglePasswordVisible = () => {
    setPasswordVisible((previousState) => !previousState);
  };

  const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
    setTimeout(() => {
      event.target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      email,
      password,
    });
  };

  return (
    <form noValidate onSubmit={handleSubmit} className={s.container}>
      <TextField
        className={s.textField}
        name="emailField"
        value={email}
        size="medium"
        type="email"
        error={authStore.errors[EErrorAuthFieldTypes.Email]}
        label="Email адрес"
        placeholder="Введите ваш email"
        iconLeft={<MailIcon className={s.fieldIcon} />}
        onKeyDown={handleEmailKeyDown}
        onChange={handleChangeEmail}
        onFocus={handleFocus}
      />
      <TextField
        className={s.textField}
        name="passwordField"
        size="medium"
        value={password}
        label="Пароль"
        placeholder="Введите ваш пароль"
        type={passwordInputType}
        ref={passwordInputRef}
        error={authStore.errors[EErrorAuthFieldTypes.Password]}
        iconLeft={<KeyIcon className={s.fieldIcon} />}
        onFocus={handleFocus}
        iconRight={
          <IconButton
            variant="ghost"
            type="button"
            className={s.passwordButton}
            size="small"
            onClick={togglePasswordVisible}
          >
            {passwordVisible ? <VisibilityOffIcon className={s.eyeIcon} /> : <VisibilityIcon className={s.eyeIcon} />}
          </IconButton>
        }
        onChange={handleChangePassword}
      />
      <Button isLoading={authStore.isLoading} className={s.submitButton} size="large" type="submit">
        {submitButtonText}
      </Button>
      {redirectLinksMap[authProccessType]}
    </form>
  );
}, 'AuthForm');
