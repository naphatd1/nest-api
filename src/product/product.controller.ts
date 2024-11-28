import { Controller, Get } from '@nestjs/common';
import { GlobalHelperService } from 'src/shared/global-helper/global-helper.service';
import { UtilityService } from 'src/shared/utility/utility.service';

@Controller('product')
export class ProductController {
  constructor(
    private readonly utilityService: UtilityService,
    private readonly globalHelperService: GlobalHelperService,
  ) {}

  @Get('/') // localhost:4000/product
  findAll() {
    return [];
  }
  @Get('/date') // localhost:4000/product
  getDate() {
    return { server_date: this.utilityService.getServerDate() };
  }
  @Get('/thai') // localhost:4000/product
  getThaiDate() {
    return { server_date: this.globalHelperService.getServerThaiDate() };
  }
}
