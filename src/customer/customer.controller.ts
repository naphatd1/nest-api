import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
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
  async create(@Body() createCustomerDto: CreateCustomerDto) {
    await this.customerService.create(createCustomerDto);
    return {
      message: 'สมัครสำเร็จ',
    };
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
  async update(
    @Param('id') id: string,
    @Body() updateCustomerDto: UpdateCustomerDto,
  ) {
    const [affectedCount] = await this.customerService.update(
      +id,
      updateCustomerDto,
    );
    if (affectedCount === 0) {
      throw new NotFoundException('ไม่พบข้อมูลที่ต้องการแก้ไข');
    }
    return {
      message: 'แก้ไขข้อมูลสำเร็จ',
    };
  }

  @Delete(':id') // localhost:4000/api/v1/customer/1
  async remove(@Param('id') id: string) {
    const numberOfDestroyRow = await this.customerService.remove(+id);
    if (numberOfDestroyRow === 0) {
      throw new NotFoundException('ไม่พบข้อมูลที่ต้องการลบ');
    }
    return {
      message: 'ลบข้อมูลสำเร็จ',
    };
  }
}
