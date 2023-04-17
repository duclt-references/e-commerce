import axios, { AxiosInstance } from 'axios';
import { TokenService } from './tokenService';

class SetupAxios {
  api: AxiosInstance;
  constructor(baseURL: string, contentType?: string) {
    this.api = axios.create({
      baseURL: baseURL,
      headers: contentType
        ? {
            'Content-Type': contentType,
          }
        : {},
    });

    this.api.interceptors.response.use(
      (response) => {
        return new Promise((resolve) => {
          resolve(response);
        });
      },
      (error) => {
        if ([401, 403].includes(error.response.status)) {
          // do some things
          return;
        }
        if (!error.response) {
          return new Promise((resolve, reject) => {
            reject(error);
          });
        }
        return Promise.reject(error.response.data);
      }
    );
  }

  setHeader = () => {
    if (TokenService.getToken()) {
      this.api.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${TokenService.getToken()}`;
    }
  };

  removeHeader = () => {
    this.api.defaults.headers.common = {};
  };

  public get = (url = '', config = {}) => {
    return this.api.get(url, config).then((response) => response);
  };

  public post = (url = '', body = {}, config = {}) => {
    return this.api.post(url, body, config).then((response) => response);
  };

  public patch = (url = '', body = {}, config = {}) => {
    return this.api.patch(url, body, config).then((response) => response);
  };

  public put = (url = '', body = {}, config = {}) => {
    return this.api.put(url, body, config).then((response) => response);
  };

  public delete = (url = '', config = {}) => {
    return this.api.delete(url, config).then((response) => response);
  };
}

export { SetupAxios };
