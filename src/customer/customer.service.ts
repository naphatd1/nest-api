import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { InjectModel } from '@nestjs/sequelize';
import { Customer } from './entities/customer.entity';

@Injectable()
export class CustomerService {
  constructor(
    @InjectModel(Customer)
    private readonly customerModel: typeof Customer,
  ) {}
  create(createCustomerDto: CreateCustomerDto) {
    return createCustomerDto;
  }

  async findAll(): Promise<Customer[]> {
    return await this.customerModel.findAll();
  }

  async findOne(id: number) {
    return await this.customerModel.findByPk(id);
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return `This action updates a #${id} customer ${updateCustomerDto}`;
  }

  remove(id: number) {
    return `This action removes a #${id} customer`;
  }
}
