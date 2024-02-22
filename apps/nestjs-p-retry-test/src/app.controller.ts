import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('p-retry-test')
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {
  }

  @Get('get-500')
  async sendRequestToSomeApiFor500() {
    return this.appService.sendRequestToSomeApiFor500();
  }

  @Get('get-200')
  async sendRequestToSomeApiFor200() {
    return this.appService.sendRequestToSomeApiFor200();
  }
}
