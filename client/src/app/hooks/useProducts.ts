import { useQuery } from '@tanstack/react-query';
import { fetchProductsByType } from '../services/api';

export const useProducts = (type: string, page: number) => {
  return useQuery({
    queryKey: ['products', type, page],
    queryFn: () => fetchProductsByType(type, page),
    enabled: !!type,
  });
};