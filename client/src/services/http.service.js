import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://localhost:3002',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  }
});

const getAccessToken = () => localStorage.getItem("accessToken");

const authInterceptor = config => {
  config.headers['authorization'] = 'Bearer' + getAccessToken();

  return config;
};

httpClient.interceptors.request.use(authInterceptor);

const errorInterceptor = error => {
  if (!error.response) {
    let msg = {
      error: 'Network or Server Error',
    };

    return Promise.reject(msg);
  }

  if (error.response.status === 403) {
    localStorage.removeItem('accessToken');
  }
  if (error.response.status === 401) {
    return Promise.reject(error.response.data);
  }

  return Promise.reject(error.response);
}

const responseInterceptor = response => {
  if (response) {
    if (response.status === 200) {
      return response.data;
    }
  }

  return response;
}

httpClient.interceptors.response.use(responseInterceptor, errorInterceptor);

export default httpClient;