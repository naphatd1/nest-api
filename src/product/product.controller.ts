import { Controller, Get } from '@nestjs/common';

@Controller('product')
export class ProductController {
  @Get('/') // localhost:4000/product
  findAll() {
    return [];
  }
}
