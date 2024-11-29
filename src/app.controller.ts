import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller({
  version: '1',
})
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/hello') // localhost:4000/api/hello
  getHello() {
    return this.appService.getHello();
  }
  @Get('/version') // localhost:4000/api/version
  getAPI() {
    return this.appService.getAPI();
  }
}
