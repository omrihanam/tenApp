'use client';

import React, { useMemo } from 'react';
import {
  MaterialReactTable,
  useMaterialReactTable,
  MRT_GlobalFilterTextField,
  MRT_ToggleFiltersButton,
  type MRT_ColumnDef,
} from 'material-react-table';
import { Box, lighten } from '@mui/material';
import { renderCellValue } from '../utils/renderCellValue';

import '../styles/ProductTable.css';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  date?: string;
  attributes?: Record<string, string>;
  [key: string]: unknown;
}

interface ProductTableProps {
  products: Product[];
  currentPage: number;
  onPageChange: (page: number) => void;
  sortField: string;
  onSortChange: (field: string) => void;
  filters: Record<string, string[]>;
  setFilters: (filters: Record<string, string[]>) => void;
  totalItems: number;
  pageSize: number;
}

export default function ProductTable({
  products,
  currentPage,
  onPageChange,
  totalItems,
  pageSize,
}: ProductTableProps) {
  const allAttributeKeys = useMemo(() => {
    const keys = new Set<string>();
    products.forEach((product) => {
      Object.keys(product.attributes || {}).forEach((key) => keys.add(key));
    });
    return Array.from(keys);
  }, [products]);

  const columns = useMemo<MRT_ColumnDef<Product>[]>(() => {
    if (!products.length) return [];

    const baseKeys = Object.keys(products[0] ?? {}).filter(
      (key) => typeof products[0]?.[key] !== 'object' && key !== 'date'
    );

    const baseColumns: MRT_ColumnDef<Product>[] = baseKeys.map((key) => ({
      accessorFn: (row) => (row?.[key] != null ? String(row[key]) : ''),
      id: key,
      header: key.charAt(0).toUpperCase() + key.slice(1),
      size: 150,
      filterVariant: 'multi-select',
      Cell: ({ cell }) =>
        renderCellValue(
          cell.getValue() as string | number | null | undefined,
          key
        ),
    }));

    const attributeColumns: MRT_ColumnDef<Product>[] = allAttributeKeys.map((key) => ({
      accessorFn: (row) =>
        row?.attributes?.[key] != null ? String(row.attributes[key]) : '',
      id: `attributes.${key}`,
      header: key.charAt(0).toUpperCase() + key.slice(1),
      size: 150,
      filterVariant: 'multi-select',
      Cell: ({ cell }) =>
        renderCellValue(
          cell.getValue() as string | number | null | undefined,
          key
        ),
    }));

    return [...baseColumns, ...attributeColumns];
  }, [products, allAttributeKeys]);

  const table = useMaterialReactTable({
    columns,
    data: products,
    enableColumnFilterModes: true,
    enableColumnOrdering: true,
    enableGrouping: true,
    enableColumnPinning: true,
    enableFacetedValues: true,
    enableRowActions: false,
    enableRowSelection: false,
    manualPagination: true,
    rowCount: totalItems,
    paginationDisplayMode: 'pages',
    onPaginationChange: (updater) => {
      const newPageIndex =
        typeof updater === 'function'
          ? updater({ pageIndex: currentPage - 1, pageSize }).pageIndex
          : updater.pageIndex;
      onPageChange(newPageIndex + 1);
    },
    state: {
      pagination: { pageIndex: currentPage - 1, pageSize },
    },
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
      columnPinning: {
        left: ['mrt-row-expand'],
        right: [],
      },
    },
    muiPaginationProps: {
      color: 'secondary',
      rowsPerPageOptions: [],
      shape: 'rounded',
      variant: 'outlined',
      showFirstButton: true,
      showLastButton: true,
      sx: {
        '& .MuiTablePagination-toolbar': {
          justifyContent: 'flex-end',
        },
        '& .MuiTablePagination-selectLabel, & .MuiTablePagination-select, & .MuiTablePagination-selectIcon, & .MuiInputBase-root': {
          display: 'none',
        },
      },
    },
    muiSearchTextFieldProps: {
      size: 'small',
      variant: 'outlined',
    },
    positionToolbarAlertBanner: 'bottom',
    renderTopToolbar: ({ table }) => (
      <Box
        sx={(theme) => ({
          backgroundColor: lighten(theme.palette.background.default, 0.05),
          display: 'flex',
          gap: '0.5rem',
          p: '8px',
          justifyContent: 'space-between',
        })}
      >
        <Box sx={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
          <MRT_GlobalFilterTextField table={table} />
          <MRT_ToggleFiltersButton table={table} />
        </Box>
      </Box>
    ),
  });

  return <MaterialReactTable table={table} />;
}
