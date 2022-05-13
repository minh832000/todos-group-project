import httpClient from "./http.service";

const collectionAPI = {
  index: async () => await httpClient.get('/users/me/collections/'),
  get: async (id) => await httpClient.get(`/collections/${id}/tasks`),
  create: async (dt) => await httpClient.post('/collections/store', dt),
  delete: async (id) => await httpClient.delete(`/collections/${id}`),
}

export default collectionAPI;