
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
private readonly products: Record<string, any[]> = {
  bike: [
    { id: 1, name: 'Mountain Bike', description: 'Great for trails', price: 500, attributes: { color: 'red', wheelSize: '27.5"' } },
    { id: 2, name: 'City Bike', description: 'Comfortable for commuting', price: 350, attributes: { color: 'blue', wheelSize: '26"' } },
    { id: 3, name: 'Electric Bike', description: 'Eco-friendly electric bike', price: 1200, attributes: { color: 'black', wheelSize: '29"' } },
    { id: 4, name: 'Folding Bike', description: 'Compact and portable for urban commuting', price: 450, attributes: { color: 'green', wheelSize: '20"' } },
    { id: 5, name: 'Hybrid Bike', description: 'Perfect for both road and mountain terrain', price: 600, attributes: { color: 'yellow', wheelSize: '28"' } },
    { id: 6, name: 'Cruiser Bike', description: 'Comfortable beach cruiser', price: 300, attributes: { color: 'pink', wheelSize: '26"' } },
    { id: 7, name: 'Racing Bike', description: 'High-performance bike for racing', price: 1500, attributes: { color: 'black', wheelSize: '700c' } },
    { id: 8, name: 'Mountain X Bike', description: 'Off-road bike for challenging trails', price: 750, attributes: { color: 'red', wheelSize: '29"' } },
    { id: 9, name: 'City Pro Bike', description: 'Urban bike with premium features', price: 900, attributes: { color: 'silver', wheelSize: '26"' } },
    { id: 10, name: 'Commuter Bike', description: 'Affordable commuter bike for daily rides', price: 250, attributes: { color: 'white', wheelSize: '27.5"' } },
    { id: 11, name: 'Fat Tire Bike', description: 'Bike for snowy and sandy conditions', price: 1300, attributes: { color: 'black', wheelSize: '4"' } },
    { id: 12, name: 'E-Mountain Bike', description: 'Electric mountain bike for outdoor adventures', price: 2000, attributes: { color: 'green', wheelSize: '27.5"' } },
    { id: 13, name: 'Fixed Gear Bike', description: 'Stylish and minimalistic city bike', price: 400, attributes: { color: 'black', wheelSize: '700c' } },
    { id: 14, name: 'Kids Bike', description: 'Bicycle designed for children', price: 150, attributes: { color: 'blue', wheelSize: '16"' } },
    { id: 15, name: 'BMX Bike', description: 'Sturdy bike for BMX racing', price: 450, attributes: { color: 'yellow', wheelSize: '20"' } },
    { id: 16, name: 'Touring Bike', description: 'Long-distance bike for touring', price: 1300, attributes: { color: 'brown', wheelSize: '28"' } },
    { id: 17, name: 'Mountain Pro Bike', description: 'Performance-focused mountain bike', price: 1200, attributes: { color: 'black', wheelSize: '29"' } },
    { id: 18, name: 'Beach Cruiser', description: 'Relaxing bike for beach rides', price: 250, attributes: { color: 'aqua', wheelSize: '26"' } },
    { id: 19, name: 'Chopper Bike', description: 'Stylish custom bike for cruising', price: 600, attributes: { color: 'red', wheelSize: '26"' } },
    { id: 20, name: 'All-Terrain Bike', description: 'Versatile bike for all kinds of terrain', price: 1000, attributes: { color: 'orange', wheelSize: '27.5"' } },

  ],
  laptop: [
    { id: 1, name: 'Ultrabook', description: 'Lightweight and powerful', price: 1200, attributes: { brand: 'Dell', ram: '16GB', storage: '512GB SSD' } },
    { id: 2, name: 'Gaming Laptop', description: 'High performance for gaming', price: 1800, attributes: { brand: 'Asus', ram: '32GB', gpu: 'RTX 3070', storage: '512GB SSD' } },
    { id: 3, name: 'Business Laptop', description: 'Affordable work laptop', price: 800, attributes: { brand: 'HP', ram: '8GB', storage: '256GB SSD' } },
    { id: 4, name: 'MacBook Air', description: 'Sleek, light, and fast', price: 1100, attributes: { brand: 'Apple', ram: '8GB', storage: '256GB SSD' } },
    { id: 5, name: 'Surface Laptop', description: 'Ultra-portable and powerful', price: 1500, attributes: { brand: 'Microsoft', ram: '16GB', storage: '512GB SSD' } },
    { id: 6, name: 'Lenovo ThinkPad', description: 'Reliable business laptop', price: 1000, attributes: { brand: 'Lenovo', ram: '16GB', storage: '512GB SSD' } },
    { id: 7, name: 'Chromebook', description: 'Affordable laptop for everyday tasks', price: 300, attributes: { brand: 'Acer', ram: '4GB', storage: '32GB SSD' } },
    { id: 8, name: 'Alienware Laptop', description: 'Gaming laptop with powerful specs', price: 2200, attributes: { brand: 'Dell', ram: '32GB', gpu: 'RTX 3080', storage: '1TB SSD' } },
    { id: 9, name: 'Asus ZenBook', description: 'Premium ultra-thin laptop', price: 1400, attributes: { brand: 'Asus', ram: '16GB', storage: '512GB SSD' } },
    { id: 10, name: 'HP Spectre x360', description: 'Convertible laptop for productivity', price: 1800, attributes: { brand: 'HP', ram: '16GB', storage: '512GB SSD' } },
    { id: 11, name: 'Razer Blade', description: 'High-end gaming laptop', price: 2500, attributes: { brand: 'Razer', ram: '32GB', gpu: 'RTX 3080', storage: '1TB SSD' } },
    { id: 12, name: 'MSI GE66 Raider', description: 'Gaming laptop with strong performance', price: 2100, attributes: { brand: 'MSI', ram: '32GB', gpu: 'RTX 3070', storage: '1TB SSD' } },
    { id: 13, name: 'HP Pavilion', description: 'Affordable laptop for everyday use', price: 600, attributes: { brand: 'HP', ram: '8GB', storage: '256GB SSD' } },
    { id: 14, name: 'Gigabyte Aero', description: 'Powerful laptop for creative professionals', price: 1900, attributes: { brand: 'Gigabyte', ram: '16GB', storage: '512GB SSD' } },
    { id: 15, name: 'Microsoft Surface Pro', description: '2-in-1 laptop with touch functionality', price: 1500, attributes: { brand: 'Microsoft', ram: '8GB', storage: '128GB SSD' } },
    { id: 16, name: 'Acer Predator Helios', description: 'Gaming laptop with advanced cooling', price: 2200, attributes: { brand: 'Acer', ram: '32GB', gpu: 'RTX 3070', storage: '1TB SSD' } },
    { id: 17, name: 'Dell XPS 13', description: 'Ultra-portable laptop for business', price: 1400, attributes: { brand: 'Dell', ram: '16GB', storage: '512GB SSD' } },
    { id: 18, name: 'Toshiba Satellite', description: 'Affordable laptop for casual use', price: 400, attributes: { brand: 'Toshiba', ram: '4GB', storage: '128GB SSD' } },

  ],
  tv: [
    { id: 1, name: 'Smart TV 55"', description: '4K Ultra HD Smart TV', price: 600, attributes: { brand: 'LG', resolution: '4K', size: '55"' } },
    { id: 2, name: 'OLED TV 65"', description: 'Premium OLED display', price: 1200, attributes: { brand: 'Sony', resolution: '4K', size: '65"' } },
    { id: 3, name: 'LED TV 50"', description: 'Affordable LED TV for living rooms', price: 400, attributes: { brand: 'Samsung', resolution: '1080p', size: '50"' } },
    { id: 4, name: 'QLED TV 75"', description: 'Premium QLED display', price: 2200, attributes: { brand: 'Samsung', resolution: '4K', size: '75"' } },
    { id: 5, name: '4K Ultra HD TV 60"', description: '60-inch 4K UHD Smart TV', price: 1000, attributes: { brand: 'TCL', resolution: '4K', size: '60"' } },
    { id: 6, name: 'Smart TV 42"', description: 'Affordable Smart TV for small rooms', price: 350, attributes: { brand: 'Vizio', resolution: '1080p', size: '42"' } },
    { id: 7, name: '8K TV 85"', description: 'Cutting-edge 8K resolution', price: 5000, attributes: { brand: 'LG', resolution: '8K', size: '85"' } },
    { id: 8, name: 'OLED TV 77"', description: 'Stunning OLED display for home cinema', price: 3000, attributes: { brand: 'Sony', resolution: '4K', size: '77"' } },
    { id: 9, name: 'Smart TV 65"', description: 'High-definition Smart TV', price: 900, attributes: { brand: 'Samsung', resolution: '4K', size: '65"' } },
    { id: 10, name: 'Curved TV 55"', description: 'Curved display for an immersive experience', price: 1200, attributes: { brand: 'Samsung', resolution: '4K', size: '55"' } },
    { id: 11, name: 'Mini LED TV 65"', description: 'Mini-LED TV for enhanced contrast', price: 1500, attributes: { brand: 'LG', resolution: '4K', size: '65"' } },
    { id: 12, name: 'Smart TV 40"', description: 'Compact and affordable TV', price: 250, attributes: { brand: 'Vizio', resolution: '1080p', size: '40"' } },

  ],
  car: [
    { id: 1, name: 'Tesla Model S', description: 'Electric car with autopilot', price: 80000, attributes: { brand: 'Tesla', color: 'black', engine: 'Electric', year: '2023' } },
    { id: 2, name: 'Ford Mustang', description: 'Classic American muscle car', price: 35000, attributes: { brand: 'Ford', color: 'red', engine: 'V8', year: '2022' } },
    { id: 3, name: 'BMW 3 Series', description: 'Luxury compact sedan', price: 45000, attributes: { brand: 'BMW', color: 'blue', engine: 'Inline-4', year: '2021' } },
    { id: 4, name: 'Audi A4', description: 'Premium sedan with advanced features', price: 40000, attributes: { brand: 'Audi', color: 'white', engine: 'Inline-4', year: '2021' } },
    { id: 5, name: 'Chevrolet Camaro', description: 'Performance coupe with V8 engine', price: 55000, attributes: { brand: 'Chevrolet', color: 'yellow', engine: 'V8', year: '2023' } },
    { id: 6, name: 'Honda Civic', description: 'Affordable and reliable compact car', price: 22000, attributes: { brand: 'Honda', color: 'silver', engine: 'Inline-4', year: '2022' } },
    { id: 7, name: 'Toyota Corolla', description: 'Compact sedan with great fuel economy', price: 20000, attributes: { brand: 'Toyota', color: 'gray', engine: 'Inline-4', year: '2021' } },
    { id: 8, name: 'Mercedes-Benz C-Class', description: 'Luxury sedan with advanced safety', price: 48000, attributes: { brand: 'Mercedes-Benz', color: 'black', engine: 'V6', year: '2022' } },
    { id: 9, name: 'Nissan Altima', description: 'Mid-size sedan with great fuel efficiency', price: 24000, attributes: { brand: 'Nissan', color: 'blue', engine: 'Inline-4', year: '2021' } },
    { id: 10, name: 'Subaru Outback', description: 'SUV with all-wheel drive', price: 35000, attributes: { brand: 'Subaru', color: 'green', engine: 'Flat-4', year: '2022' } },
    { id: 11, name: 'Porsche 911', description: 'Iconic sports car', price: 100000, attributes: { brand: 'Porsche', color: 'red', engine: 'Flat-6', year: '2023' } },
    { id: 12, name: 'Kia Stinger', description: 'Sporty sedan with powerful engine', price: 38000, attributes: { brand: 'Kia', color: 'black', engine: 'V6', year: '2021' } },
    { id: 13, name: 'Jaguar F-Type', description: 'High-performance sports car', price: 70000, attributes: { brand: 'Jaguar', color: 'blue', engine: 'V8', year: '2022' } },
    { id: 14, name: 'Mazda CX-5', description: 'Compact crossover SUV', price: 33000, attributes: { brand: 'Mazda', color: 'white', engine: 'Inline-4', year: '2022' } },
    { id: 15, name: 'Hyundai Elantra', description: 'Affordable sedan with modern features', price: 18000, attributes: { brand: 'Hyundai', color: 'gray', engine: 'Inline-4', year: '2021' } },
    { id: 16, name: 'Ford F-150', description: 'Powerful pickup truck', price: 45000, attributes: { brand: 'Ford', color: 'blue', engine: 'V8', year: '2023' } },
    { id: 17, name: 'Jeep Wrangler', description: 'Off-road SUV with rugged design', price: 38000, attributes: { brand: 'Jeep', color: 'green', engine: 'V6', year: '2022' } },
    { id: 18, name: 'Ram 1500', description: 'Full-size pickup truck with advanced features', price: 50000, attributes: { brand: 'Ram', color: 'red', engine: 'V8', year: '2023' } },
    { id: 19, name: 'Tesla Model 3', description: 'Affordable electric sedan', price: 50000, attributes: { brand: 'Tesla', color: 'silver', engine: 'Electric', year: '2023' } },
    { id: 20, name: 'BMW X5', description: 'Luxury SUV with powerful performance', price: 65000, attributes: { brand: 'BMW', color: 'black', engine: 'Inline-6', year: '2022' } },

  ],
};



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

  // Apply filtering
  products = products.filter((product) => {
    return Object.entries(filters).every(([field, values]) => {
      if (field.startsWith('attributes.')) {
        const attrKey = field.replace('attributes.', '');
        return values.includes(String(product.attributes?.[attrKey]));
      } else {
        return values.includes(String(product[field]));
      }
    });
  });

  // Apply sorting
  if (sortField) {
    const isAttribute = sortField.startsWith('attributes.');
    const fieldKey = isAttribute ? sortField.replace('attributes.', '') : sortField;

    products = products.sort((a, b) => {
      const aValue = isAttribute ? a.attributes?.[fieldKey] : a[sortField];
      const bValue = isAttribute ? b.attributes?.[fieldKey] : b[sortField];

      if (aValue === undefined || bValue === undefined) return 0;
      return sortDirection === 'asc'
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });
  }

  // Apply pagination
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
        Object.entries(item.attributes).forEach(([attrKey, attrValue]) => {
          const value = String(attrValue); // Cast to string safely
          attributeCounts[attrKey] = attributeCounts[attrKey] || {};
          attributeCounts[attrKey][value] = (attributeCounts[attrKey][value] || 0) + 1;
        });
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

  items.forEach((item) => {
    // Add top-level keys (common fields)
    for (const key of Object.keys(item)) {
      if (['attributes', 'date'].includes(key)) continue;
      const val = String(item[key]);
      if (!result[key]) result[key] = new Set();
      result[key].add(val);
    }

    // Add nested attributes (specific fields)
    if (item.attributes) {
      for (const [key, val] of Object.entries(item.attributes)) {
        const fullKey = `attributes.${key}`;
        if (!result[fullKey]) result[fullKey] = new Set();
        result[fullKey].add(String(val));
      }
    }
  });

  // Convert Set to Array
  return Object.fromEntries(
    Object.entries(result).map(([k, v]) => [k, Array.from(v)])
  );
}

}
