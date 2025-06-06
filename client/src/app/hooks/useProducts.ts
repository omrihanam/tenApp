import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const useProducts = (
  type: string,
  page: number,
  sortField: string,
  filters: Record<string, string[]>
) => {
  return useQuery({
    queryKey: ['products', type, page, sortField, filters],
    queryFn: async () => {
      const params = new URLSearchParams();
      params.append('type', type);
      params.append('page', String(page));
      if (sortField) {
        params.append('sortField', sortField);
        params.append('sortDirection', 'asc'); // or 'desc', based on your UI
      }

      // Flatten filters
      Object.entries(filters).forEach(([key, values]) => {
        values.forEach((v) => params.append(key, v));
      });

      const res = await axios.get(`http://localhost:3001/products?${params.toString()}`);
      return res.data; // Expected to include { data, total, page, pageSize }
    },
  });
};
