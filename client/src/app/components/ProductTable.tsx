import React from 'react';
import  '../styles/ProductTable.css';
import { Product } from '../types/product';
import { formatPrice } from '../utils/format';
import { Button, Table } from 'react-bootstrap';


interface Props {
  products: Product[];
  currentPage: number;
  onPageChange: (page: number) => void;
}


export default function ProductTable({ products, currentPage, onPageChange }: {
  products: any[];
  currentPage: number;
  onPageChange: (page: number) => void;
}) {
  if (products.length === 0) return <p>No products found.</p>;
  const attributeKeys = Object.keys(products[0].attributes || {});

  return (
    <div>
      <Table bordered hover responsive>
        <thead className="table-light">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            {attributeKeys.map(attr => (
              <th key={attr}>{attr}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.description}</td>
              <td>${product.price.toFixed(2)}</td>
              {attributeKeys.map(key => (
                <td key={key}>{product.attributes[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
      <div className="d-flex justify-content-between align-items-center mt-3">
        <Button variant="secondary" disabled={currentPage === 1} onClick={() => onPageChange(currentPage - 1)}>
          Previous
        </Button>
        <span>Page {currentPage}</span>
        <Button variant="secondary" onClick={() => onPageChange(currentPage + 1)}>
          Next
        </Button>
      </div>
    </div>
  );
}
