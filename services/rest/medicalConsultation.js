import httpClient from './httpClient';

export const create = medicalConsultation => httpClient.post('/medical-consultations', medicalConsultation);

export const update = (uuid, medicalConsultation) => httpClient.put(`/medical-consultations/${uuid}`, medicalConsultation);

export const getAll = () => httpClient.get('/medical-consultations');

export const get = uuid => httpClient.get(`/medical-consultations/${uuid}`);

export default {
  create,
  update,
  getAll,
  get,
};
