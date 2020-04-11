import axios from 'axios';

const api = axios.create({
  baseURL: 'https://4k749pt2se.execute-api.us-west-1.amazonaws.com/default',
});

export default api;
