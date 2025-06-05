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
  getProducts(@Query('type') type: string, @Query('page') page = '1') {
    return this.appService.getProducts(type, parseInt(page));
  }
}