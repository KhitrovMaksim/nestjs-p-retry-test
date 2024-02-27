import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('p-retry-test')
export class AppController {
  constructor(
    private readonly appService: AppService,
  ) {
  }

  @Get()
  async sendRequest() {
    return this.appService.sendRequest();
  }

}
