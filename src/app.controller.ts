import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello') // localhost:4000/hello
  getHello() {
    return this.appService.getHello();
  }
  @Get('/api') // localhost:4000/api
  getAPI() {
    return this.appService.getAPI();
  }
}
