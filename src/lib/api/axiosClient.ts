import axios, { AxiosInstance } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: `https://swapi.dev/api/`,
  headers: {
    Accept: 'application/json',
  },
});

export default instance;

export const { CancelToken } = axios;
