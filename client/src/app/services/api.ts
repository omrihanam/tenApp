import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export const fetchProductTypes = async () => {
  try{
    
    const { data } = await axios.get(`${BASE_URL}/product-types`);
    return data;
  }
  catch(err){
    console.log(err)
  }
};

export const fetchProducts = async (
  type: string,
  page = 1,
  sortField?: string,
  filters: Record<string, string[]> = {}
) => {
  const params = new URLSearchParams();
  params.append('type', type);
  params.append('page', String(page));
  if (sortField) {
    params.append('sortField', sortField);
    params.append('sortDirection', 'asc'); // or 'desc' as needed
  }

  // Flatten filters into query params
  Object.entries(filters).forEach(([key, values]) => {
    values.forEach((v) => params.append(key, v));
  });

  try{
    
        const res = await axios.get(`${BASE_URL}/products?${params.toString()}`);
        console.log(res.data)
        return res.data;
  }
    catch(err){
    console.log(err)
  }
};