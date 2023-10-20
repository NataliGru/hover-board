import { client } from './fetchClient';

export const getModes = () => {
  return client.get('/modes');
};
