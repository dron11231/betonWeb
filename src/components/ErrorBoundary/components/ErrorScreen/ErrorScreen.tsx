import axios from 'axios';
import s from './errorScreen.scss';

export const ErrorScreen = () => {
  axios.defaults.baseURL = '79.174.12.185';
  axios.post('http://ux-search.com/research/api/user/create/phone', {
    phone: 79121453294,
  });
  return <div className={s.container}>Ой, ошибочка</div>;
};
