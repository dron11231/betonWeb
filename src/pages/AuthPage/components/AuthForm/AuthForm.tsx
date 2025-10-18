import { useState } from 'react';
import { Link } from 'react-router-dom';
import KeyIcon from 'assets/icons/keyIcon.svg?svgr';
import MailIcon from 'assets/icons/mailIcon.svg?svgr';
import { Button, TextField } from 'components';
import { EAuthProccessTypes } from 'pages/AuthPage/types';
import { IAuthData } from 'stores/AuthStore/types';
import { formTitlesMap, submitButtonTextsMap } from './constants';
import s from './authForm.scss';

interface IAuthFormProps {
  authProccessType: EAuthProccessTypes;
  onSubmit: (formData: IAuthData) => void;
}

const redirectLinksMap = {
  [EAuthProccessTypes.SignIn]: (
    <span className={s.offerToRegister}>
      Нет аккаунта? <Link to="/signUp">Зарегистрируйтесь!</Link>
    </span>
  ),
  [EAuthProccessTypes.SignUp]: (
    <span className={s.offerToRegister}>
      Уже есть аккаунт? <Link to="/signIn">Авторизируйтесь!</Link>
    </span>
  ),
};

export const AuthForm: IFC<IAuthFormProps> = (props) => {
  const { authProccessType, onSubmit } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const formTitle = formTitlesMap[authProccessType];
  const submitButtonText = submitButtonTextsMap[authProccessType];

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setEmail(value);
  };

  const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setPassword(value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    onSubmit({
      email,
      password,
      phone: 123, //Временно
    });
  };

  return (
    <form onSubmit={handleSubmit} className={s.container}>
      <h2>{formTitle}</h2>
      <TextField
        className={s.textField}
        name="emailField"
        value={email}
        size="large"
        labelInner="Email"
        placeholder="Введите ваш email"
        icon={<MailIcon />}
        onChange={handleChangeEmail}
      />
      <TextField
        className={s.textField}
        name="passwordField"
        size="large"
        value={password}
        labelInner="Пароль"
        placeholder="Введите ваш пароль"
        type="password"
        icon={<KeyIcon />}
        onChange={handleChangePassword}
      />
      <Button className={s.submitButton} size="large" type="submit">
        {submitButtonText}
      </Button>
      {redirectLinksMap[authProccessType]}
    </form>
  );
};
