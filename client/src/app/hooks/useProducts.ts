import { useQuery } from '@tanstack/react-query';
import { fetchProducts } from '../services/api';

export const useProducts = (
  type: string,
  page: number,
  sortField: string,
  filters: Record<string, string[]>
) => {
  return useQuery({
    queryKey: ['products', type, page, sortField, filters],
    queryFn: () => fetchProducts(type, page, sortField, filters),
  });
};
