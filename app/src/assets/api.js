import axios from 'axios';

export { axios };

export const mongo = axios.create({
  baseURL: 'https://four-noble-truths-api.herokuapp.com/api',
});
