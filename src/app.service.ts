import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'Hello World!' };
  }
  getAPI() {
    return {
      API_VERSION: process.env.API_VERSION,
      message: 'NestJS API running...',
    };
  }
}
