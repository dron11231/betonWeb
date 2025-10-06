import { useState } from 'react';
import MailIcon from 'assets/icons/mailIcon.svg?svgr';
import { TextField } from 'components';
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

  return (
    <div className={s.container}>
      <h2>Зарегистрируйтесь</h2>
      <TextField
        name="loginField"
        value={email}
        size="large"
        placeholder="Email"
        icon={<MailIcon />}
        onChange={handleChangeEmail}
      />
      <TextField
        name="passwordField"
        size="large"
        value={password}
        placeholder="Пароль"
        type="password"
        onChange={handleChangePassword}
      />
    </div>
  );
};
