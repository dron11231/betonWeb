import { useState } from 'react';
import { TextField } from 'components';

export const SignUpScreen: IFC = () => {
  const [login, setLogin] = useState('');
  // const [password, setPassword] = useState('');

  const handleChangeLogin = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setLogin(value);
  };

  // const handleChangePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const { value } = event.target;

  //   setPassword(value);
  // };

  return (
    <div>
      <TextField value={login} label="Логин" onChange={handleChangeLogin} />
    </div>
  );
};
