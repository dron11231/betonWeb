import axios, { AxiosError } from 'axios';

export const restApi = axios.create({
  baseURL: IS_LOCAL ? 'http://localhost:11000' : 'https://ux-search.com',
  withCredentials: true,
});

restApi.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    if (error.status === 401) {
      window.location.href = '/signIn';
    } else {
      return Promise.reject(error);
    }
  }
);
