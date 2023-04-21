import { API_PATH } from '@/config/path';
import { apiService } from '@/httpRequest';

export const URL_REGISTER = 'users/add';
export const URL_LOGOUT = 'logout';

export const authService = {
  async register(body: {
    email: string;
    password: string;
    name: string;
    phone: string;
    passwordConfirm?: string;
  }) {
    body.passwordConfirm = body.password;
    try {
      await apiService.post(API_PATH.register, body);
    } catch (error) {
      console.log(error.message);
    }

    return this.login({
      identity: body.email,
      password: body.password,
    });
  },

  login(body: { identity: string; password: string }) {
    return apiService.post(API_PATH.login, body);
  },

  logout() {
    return apiService.post(URL_LOGOUT);
  },
};
