import axios from 'axios';

export { axios };

export const mongo = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://four-noble-truths.fly.dev/api',
});
