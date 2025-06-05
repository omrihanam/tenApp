import { useQuery } from '@tanstack/react-query';
import { getProducts, getFilters } from '../services/api';

export function useProducts(type: string | null, page: number) {
  const productsQuery = useQuery({
    queryKey: ['products', type, page],
    queryFn: () => getProducts(type, page).then(res => res.data),
    enabled: !!type,
  });

  const filtersQuery = useQuery({
    queryKey: ['filters', type],
    queryFn: () => getFilters(type).then(res => res.data),
    enabled: !!type,
  });

  return {
    products: productsQuery.data || [],
    filters: filtersQuery.data || {},
    isLoading: productsQuery.isLoading || filtersQuery.isLoading,
    error: productsQuery.error || filtersQuery.error,
  };
}
