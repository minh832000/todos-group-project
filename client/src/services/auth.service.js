import httpClient from "./http.service";

const authAPI = {
  login: async (dt) => await httpClient.post('/login', dt),
  register: async (dt) => await httpClient.post('/register', dt),
};

export default authAPI;