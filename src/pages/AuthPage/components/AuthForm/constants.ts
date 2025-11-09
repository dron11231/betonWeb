import { EAuthProcessTypes } from 'pages/AuthPage/types';

export const formTitlesMap = {
  [EAuthProcessTypes.SignUp]: 'Зарегистрируйтесь',
  [EAuthProcessTypes.SignIn]: 'Авторизируйтесь',
};

export const submitButtonTextsMap = {
  [EAuthProcessTypes.SignUp]: 'Зарегистрироваться',
  [EAuthProcessTypes.SignIn]: 'Войти',
};
