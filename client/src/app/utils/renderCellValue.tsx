import React from 'react';


// Utility function to render values based on type
export const renderCellValue = (
  value: string | number | null | undefined,
  key: string
): React.ReactNode => {
  if (value == null) return '';

  const lowerKey = key.toLowerCase();

  if (lowerKey.includes('date')) {
    const date = new Date(value);
    return isNaN(date.getTime()) ? String(value) : date.toLocaleDateString();
  }

  if (lowerKey.includes('price') || (typeof value === 'number' && key === 'price')) {
    return formatPrice(Number(value));
  }

  return <span>{String(value)}</span>;
};

// Utility function to format price
export const formatPrice = (value: number): string => {
  return `$${Number(value).toFixed(2)}`;
};