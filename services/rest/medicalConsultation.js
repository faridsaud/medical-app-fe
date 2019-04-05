import httpClient from './httpClient';

export const create = medicalConsultation => httpClient.post('/medical-consultations', medicalConsultation);
export const update = (uuid, medicalConsultation) => httpClient.post(`/medical-consultations/${uuid}`, medicalConsultation);

export default {
  create,
  update,
};
