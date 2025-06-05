import { useQuery } from '@tanstack/react-query';
import { fetchProductTypes } from '../services/api';

export const useProductTypes = () => {
  return useQuery({
    queryKey: ['product-types'],
    queryFn: fetchProductTypes,
  });
};