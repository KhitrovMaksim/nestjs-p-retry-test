import { Injectable } from '@nestjs/common';
import { SomeApiClientService } from '@app/shared/some-api-client/some-api-client.service';

@Injectable()
export class AppService {

  constructor(
    private readonly someApiClientService: SomeApiClientService
  ) {
  }
  async sendRequestToSomeApiFor500() {
    return this.someApiClientService.request('500');
  }

  async sendRequestToSomeApiFor200() {
    return this.someApiClientService.request('200');
  }
}
