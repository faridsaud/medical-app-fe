import httpClient from './httpClient';

export const create = clinicHistory => httpClient.post('/clinic-histories', clinicHistory);

export const update = (uuid, clinicHistory) => httpClient.put(`/clinic-histories/${uuid}`, clinicHistory);

export const getAll = () => httpClient.get('/clinic-histories');

export const get = uuid => httpClient.get(`/clinic-histories/${uuid}`);


export default {
  create,
  update,
  getAll,
  get,
};
