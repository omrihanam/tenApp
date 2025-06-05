import { useQuery } from '@tanstack/react-query';
import { getStats } from '../services/api';

export function useProductTypes() {
  const { data = [], isLoading, error } = useQuery({
    queryKey: ['productTypes'],
    queryFn: () => getStats().then(res => res.data),
  });
  return { types: data, isLoading, error };
}
