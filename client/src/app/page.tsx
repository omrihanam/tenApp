'use client';

import Sidebar from './components/Sidebar';
import ProductTable from './components/ProductTable';
import { useProductTypes } from './hooks/useProductTypes';
import { useProducts } from './hooks/useProducts';
import { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  CircularProgress,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function Page() {
  const { data: types = [], isLoading: loadingTypes } = useProductTypes();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [sortField, setSortField] = useState('');
  const [filters, setFilters] = useState<Record<string, string[]>>({});

  const {
    data: productsResponse,
    isLoading: loadingProducts,
  } = useProducts(selectedType || '', page, sortField, filters);

  const products = productsResponse?.data || [];
  const totalItems = productsResponse?.total || 0;
  const pageSize = productsResponse?.pageSize || 10;

  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));

  useEffect(() => {
    if (!selectedType && types.length > 0) {
      setSelectedType(types[0].type);
    }
  }, [types, selectedType]);

  useEffect(() => {
    setPage(1);
  }, [selectedType, sortField, filters]);

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: isMdUp ? 'row' : 'column',
          p: 2,
          gap: 2,
          height: '100%',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            flex: isMdUp ? '0 0 280px' : '1 1 auto',
            minWidth: isMdUp ? 280 : '100%',
          }}
        >
          <Sidebar
            types={types}
            selectedType={selectedType}
            onSelect={setSelectedType}
          />
        </Box>

        <Box
          sx={{
            flex: 1,
            margin: 2,
            minWidth: 0,
            overflowX: 'auto',
          }}
        >
          {loadingTypes || loadingProducts ? (
            <Box sx={{ textAlign: 'center', mt: 5 }}>
              <CircularProgress />
              <Typography mt={2}>Loading...</Typography>
            </Box>
          ) : (
            <>
              <Typography variant="h5" gutterBottom>
                Products: {selectedType}
              </Typography>
              <Box sx={{ minWidth: 700 }}>
                <ProductTable
                  products={products}
                  currentPage={page}
                  onPageChange={setPage}
                  onSortChange={setSortField}
                  sortField={sortField}
                  filters={filters}
                  setFilters={setFilters}
                  totalItems={totalItems}
                  pageSize={pageSize}
                />
              </Box>
            </>
          )}
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
