import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const getTodos = () => {
  return axios.get(`${API_BASE_URL}/todos`);
};
