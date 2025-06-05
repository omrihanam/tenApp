'use client';

import Sidebar from './components/Sidebar';
import ProductTable from './components/ProductTable';
import { useProductTypes } from './hooks/useProductTypes';
import { useProducts } from './hooks/useProducts';
import { useEffect, useState } from 'react';

export default function Page() {
  const { data: types = [], isLoading: loadingTypes } = useProductTypes();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const { data: products = [], isLoading: loadingProducts } = useProducts(selectedType || '', page);

  useEffect(() => {
    if (!selectedType && types.length > 0) {
      setSelectedType(types[0].type);
    }
  }, [types, selectedType]);

  useEffect(() => {
    setPage(1);
  }, [selectedType]);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar types={types} selectedType={selectedType} onSelect={setSelectedType} />
      <main style={{ padding: '1rem', flex: 1 }}>
        {loadingTypes || loadingProducts ? (
          <p>Loading...</p>
        ) : (
          <>
            <h3>Products: {selectedType}</h3>
            <ProductTable products={products} currentPage={page} onPageChange={setPage} />
          </>
        )}
      </main>
    </div>
  );
}
