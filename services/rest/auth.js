import httpClient from './httpClient';

export const login = (email, password) => httpClient.post('/signin', { email, password });

export default {
  login,
}
