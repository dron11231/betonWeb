import axios from 'axios';

export const restApi = axios.create({
  baseURL: IS_LOCAL ? 'http://localhost:11000' : 'https://ux-search.com',
  withCredentials: true,
});
