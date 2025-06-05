"use client"
import Sidebar from './components/Sidebar';
import ProductTable from './components/ProductTable';
import { ListGroup, Button, Table } from 'react-bootstrap';

import { useEffect, useState } from 'react';

const mockTypes = [
  { type: 'bike', count: 2 },
  { type: 'laptop', count: 1 },
];

const mockProductsByType: Record<string, any[]> = {
  bike: [
    {
      id: 1,
      name: 'Mountain Bike',
      description: 'A bike for rough terrain',
      price: 500,
      attributes: { color: 'red', wheelSize: '27.5' },
    },
    {
      id: 2,
      name: 'Road Bike',
      description: 'Lightweight bike for speed',
      price: 800,
      attributes: { color: 'blue', wheelSize: '28' },
    },
  ],
  laptop: [
    {
      id: 3,
      name: 'Ultrabook',
      description: 'Portable and powerful',
      price: 1200,
      attributes: { brand: 'Dell', ram: '16GB' },
    },
  ],
};

export default function Page() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const [types] = useState(mockTypes);
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    if (types.length > 0 && !selectedType) setSelectedType(types[0].type);
  }, [types]);

  useEffect(() => {
    setPage(1);
  }, [selectedType]);

  useEffect(() => {
    if (selectedType) {
      const pageSize = 10;
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      setProducts(mockProductsByType[selectedType].slice(start, end));
    }
  }, [selectedType, page]);

  return (
    <div className="d-flex">
      <Sidebar types={types} selectedType={selectedType} onSelect={setSelectedType} />
      <main className="p-4 flex-grow-1">
        <h3>Products: {selectedType}</h3>
        <ProductTable products={products} currentPage={page} onPageChange={setPage} />
      </main>
    </div>
  );
}


/*
import Sidebar from './components/Sidebar';
import ProductTable from './components/ProductTable';
import { useProductTypes } from './hooks/useProductTypes';
import { useProducts } from './hooks/useProducts';
import { useEffect, useState } from 'react';

export default function Page() {
  const { types, isLoading: loadingTypes } = useProductTypes();
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [page, setPage] = useState(1);
  const { products, isLoading } = useProducts(selectedType, page);

  useEffect(() => {
    if (types.length > 0 && !selectedType) setSelectedType(types[0].type);
  }, [types]);

  useEffect(() => {
    setPage(1);
  }, [selectedType]);

  return (
    <div style={{ display: 'flex' }}>
      <Sidebar types={types} selectedType={selectedType} onSelect={setSelectedType} />
      <main style={{ padding: '1rem', flex: 1 }}>
        {loadingTypes || isLoading ? (
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
*/