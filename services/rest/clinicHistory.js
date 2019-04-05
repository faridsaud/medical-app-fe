import httpClient from './httpClient';

export const create = clinicHistory => httpClient.post('/clinic-histories', clinicHistory);

export const update = (uuid, clinicHistory) => httpClient.post(`/clinic-histories/${uuid}`, clinicHistory);

export default {
  create,
  update,
};
