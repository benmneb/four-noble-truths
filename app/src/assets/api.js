import axios from 'axios';

export { axios };

export const mongo = axios.create({
  // baseURL: 'http://localhost:5000/api',
  baseURL: 'https://four-noble-truths.fly.dev/api',
  headers: {
    'FLY-API': process.env.REACT_APP_FLY_API,
  },
});
