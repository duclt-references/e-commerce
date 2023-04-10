import { apiService } from '@/httpRequest';

export const URL_LOGIN = 'auth/login';
export const URL_REGISTER = 'users/add';
export const URL_LOGOUT = 'logout';

const authApi = {
  register(body: {
    email: string;
    password: string;
    name: string;
    phone: string;
  }) {
    return apiService.post(URL_REGISTER, body);
  },
  login(body: { username: string; password: string }) {
    return apiService.post(URL_LOGIN, body);
  },
  logout() {
    return apiService.post(URL_LOGOUT);
  },
};

export default authApi;
