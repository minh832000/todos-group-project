import httpClient from "./http.service";

const taskAPI = {
    delete: async (id) => await httpClient.delete(`/tasks/${id}`),
    create: async (dt) => await httpClient.post('/tasks/store', dt),
    update: async (dt) => await httpClient.put(`/tasks/${dt.id}`, dt),
}

export default taskAPI;