import httpClient from './http.service';
import TokenService from '../services/token.service';

const authInterceptor = config => {
  const token = TokenService.getLocalAccessToken();

  if (token) {
    config.headers['authorization'] = 'Bearer ' + token;
  }

  return config;
};

const responseInterceptor = res => {
  if (res) {
    if (res.status === 200) {
      return res.data;
    }
  }
  return res;
};

const errorInterceptor = async (err) => {
  const originalConfig = err.config;
  if (originalConfig.url !== '/login' && err.response) {
    // access toekn was expired
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const rs = await httpClient.post('/refresh', {
          refreshToken: TokenService.getLocalRefreshToken(),
        });
      } catch (_err) {
        return Promise.reject(_err)
      }
    }
  }
}
const setup = (store) => {
  httpClient.interceptors.request.use(authInterceptor(config));
}