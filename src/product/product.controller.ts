import { Controller, Get } from '@nestjs/common';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('product')
export class ProductController {
  constructor(private readonly utilityService: UtilityService) {}

  @Get('/') // localhost:4000/product
  findAll() {
    return [];
  }
  @Get('/date') // localhost:4000/product
  getDate() {
    return { server_date: this.utilityService.getServerDate() };
  }
}
