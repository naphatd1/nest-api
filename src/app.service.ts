import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello() {
    return { message: 'Hello World!' };
  }
  getAPI() {
    return { API_VERSION: '1.0.0', message: 'NestJS API running...' };
  }
}
