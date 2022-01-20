import axios from 'axios';
import config from '../../config';


const instance = axios.create({
  baseURL: config.API_URL,
  timeout: 10000,
  withCredentials: true,
});

instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    config.headers.Authorization = accessToken;
  }

  return config;
});

export default instance;
