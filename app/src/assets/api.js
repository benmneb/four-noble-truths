import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

const get = (data) => api.get(`/${data}`);
const add = (data) => api.post(``, data);
const update = (data) => api.put(`/${data}`);
const remove = (data) => api.delete(`/${data}`);

export const mongo = {
  get,
  add,
  update,
  remove,
};
