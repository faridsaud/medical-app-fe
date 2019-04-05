import httpClient from './httpClient';

export const create = clinicHistory => httpClient.post('/clinic-histories', clinicHistory);

export default {
  create,
};
