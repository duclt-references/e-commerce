import { apiPath } from '@/config/path';
import { apiService } from '@/httpRequest';

export const URL_REGISTER = 'users/add';
export const URL_LOGOUT = 'logout';

export const authService = {
  register(body: {
    email: string;
    password: string;
    name: string;
    phone: string;
  }) {
    return apiService.post(URL_REGISTER, body);
  },

  login(body: { identity: string; password: string }) {
    return apiService.post(apiPath.login, body);
  },

  logout() {
    return apiService.post(URL_LOGOUT);
  },
};
