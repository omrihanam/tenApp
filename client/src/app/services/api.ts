import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const fetchProductTypes = async () => {
  const { data } = await axios.get(`${BASE_URL}/product-types`);
  return data;
};

export const fetchProductsByType = async (type: string, page = 1) => {
  const { data } = await axios.get(`${BASE_URL}/products`, {
    params: { type, page },
  });
  return data;
};
