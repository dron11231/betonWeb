import { useState } from 'react';
import KeyIcon from 'assets/icons/keyIcon.svg?svgr';
import MailIcon from 'assets/icons/mailIcon.svg?svgr';
import { Button, TextField } from 'components';
import s from './signUpScreen.scss';

export const SignUpScreen: IFC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
  };

  return (
    <form onSubmit={handleSubmit} className={s.container}>
      <h2>Зарегистрируйтесь</h2>
      <TextField
        name="emailField"
        value={email}
        size="large"
        labelInner="Email"
        placeholder="Введите ваш email"
        icon={<MailIcon />}
        onChange={handleChangeEmail}
      />
      <TextField
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
        Зарегистрироваться
      </Button>
    </form>
  );
};
