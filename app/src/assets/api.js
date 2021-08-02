import axios from 'axios';

export { axios };

export const mongo = axios.create({
  baseURL: 'http://localhost:5000/api',
});
