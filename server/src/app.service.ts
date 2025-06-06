import { Injectable, OnModuleInit } from '@nestjs/common';
import { readFile } from 'fs/promises';
import { join } from 'path';

@Injectable()
export class AppService implements OnModuleInit {
  private products: Record<string, any[]> = {};

  async onModuleInit() {
    const filePath = join(__dirname, '..', 'src/Database', 'products.json');
    const fileContent = await readFile(filePath, 'utf-8');
    this.products = JSON.parse(fileContent);
  }

  getProductTypes() {
    return Object.entries(this.products).map(([type, items]) => ({
      type,
      count: items.length,
    }));
  }

  getProducts(
    type: string,
    page = 1,
    sortField?: string,
    sortDirection: 'asc' | 'desc' = 'asc',
    filters: Record<string, string[]> = {}
  ) {
    const pageSize = 10;
    let products = this.products[type] || [];

    products = products.filter((product) =>
      Object.entries(filters).every(([field, values]) => {
        if (field.startsWith('attributes.')) {
          const attrKey = field.replace('attributes.', '');
          return values.includes(String(product.attributes?.[attrKey]));
        } else {
          return values.includes(String(product[field]));
        }
      })
    );

    if (sortField) {
      const isAttr = sortField.startsWith('attributes.');
      const fieldKey = isAttr ? sortField.replace('attributes.', '') : sortField;

      products = products.sort((a, b) => {
        const aVal = isAttr ? a.attributes?.[fieldKey] : a[sortField];
        const bVal = isAttr ? b.attributes?.[fieldKey] : b[sortField];
        if (aVal === undefined || bVal === undefined) return 0;
        return sortDirection === 'asc'
          ? String(aVal).localeCompare(String(bVal))
          : String(bVal).localeCompare(String(aVal));
      });
    }

    const start = (page - 1) * pageSize;
    const paged = products.slice(start, start + pageSize);

    return {
      data: paged,
      total: products.length,
      page,
      pageSize,
    };
  }

  getProductStatistics() {
    return Object.entries(this.products).map(([type, items]) => {
      const attributeCounts: Record<string, Record<string, number>> = {};

      items.forEach((item) => {
        if (item.attributes) {
          for (const [attrKey, attrValue] of Object.entries(item.attributes)) {
            const val = String(attrValue);
            attributeCounts[attrKey] = attributeCounts[attrKey] || {};
            attributeCounts[attrKey][val] = (attributeCounts[attrKey][val] || 0) + 1;
          }
        }
      });

      return {
        type,
        total: items.length,
        attributes: attributeCounts,
      };
    });
  }

  getProductFilterValues(type: string) {
    const items = this.products[type] || [];
    const result: Record<string, Set<string>> = {};

    for (const item of items) {
      for (const key of Object.keys(item)) {
        if (['attributes', 'date'].includes(key)) continue;
        const val = String(item[key]);
        result[key] = result[key] || new Set();
        result[key].add(val);
      }

      if (item.attributes) {
        for (const [key, val] of Object.entries(item.attributes)) {
          const fullKey = `attributes.${key}`;
          result[fullKey] = result[fullKey] || new Set();
          result[fullKey].add(String(val));
        }
      }
    }

    return Object.fromEntries(Object.entries(result).map(([k, v]) => [k, [...v]]));
  }
}
