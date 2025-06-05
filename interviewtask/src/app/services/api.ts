import axios from 'axios';

const API_BASE = 'http://localhost:3000';

export const getStats = () => axios.get(`${API_BASE}/stats`);
export const getProducts = (type: string | null, page = 1) =>
  axios.get(`${API_BASE}/products`, { params: { type, page } });
export const getFilters = (type: string | null) =>
  axios.get(`${API_BASE}/filters`, { params: { type } });
