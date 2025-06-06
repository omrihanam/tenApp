import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('product-types')
  getTypes() {
    return this.appService.getProductTypes();
  }

@Get('products')
getProducts(
  @Query('type') type: string,
  @Query('page') page = '1',
  @Query('sortField') sortField?: string,
  @Query('sortDirection') sortDirection: 'asc' | 'desc' = 'asc',
  @Query() query?: Record<string, any>,
) {
  const filters: Record<string, string[]> = {};

  // Extract filters from query (excluding known params)
  for (const [key, value] of Object.entries(query || {})) {
    if (!['type', 'page', 'sortField', 'sortDirection'].includes(key)) {
      filters[key] = Array.isArray(value) ? value : [value];
    }

  }

  return this.appService.getProducts(
    type,
    parseInt(page),
    sortField,
    sortDirection,
    filters
  );
}

  @Get('product-statistics')
getProductStatistics() {
  return this.appService.getProductStatistics();
}

@Get('product-filter-values')
getFilterValues(@Query('type') type: string) {
  return this.appService.getProductFilterValues(type);
}
}
