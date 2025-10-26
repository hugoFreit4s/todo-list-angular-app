import { enviroment } from '../../enviroments/enviroment';

const prefix = `${enviroment.apiPrefix}`;

export const API_URL = {
  REGISTER: `${prefix}/auth/register`,
  LOGIN: `${prefix}/auth/login`,
};
