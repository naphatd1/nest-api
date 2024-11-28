import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CustomerService } from './customer.service';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';

@Controller({
  path: 'customer', // localhost:4000/api/v1/customer
  version: '1',
})
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Post() // localhost:4000/api/v1/customer
  create(@Body() createCustomerDto: CreateCustomerDto) {
    return this.customerService.create(createCustomerDto);
  }

  @Get() // localhost:4000/api/v1/customer
  findAll() {
    return this.customerService.findAll();
  }

  @Get(':id') // localhost:4000/api/v1/customer/1
  findOne(@Param('id') id: string) {
    return this.customerService.findOne(+id);
  }

  @Patch(':id') // localhost:4000/api/v1/customer/1
  update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    return this.customerService.update(+id, updateCustomerDto);
  }

  @Delete(':id') // localhost:4000/api/v1/customer/1
  remove(@Param('id') id: string) {
    return this.customerService.remove(+id);
  }
}
