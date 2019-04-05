import httpClient from './httpClient';


export const createPatient = patient => httpClient.post('/patient', patient);
