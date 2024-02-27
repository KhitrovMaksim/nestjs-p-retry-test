import { Injectable } from '@nestjs/common';
import { SomeApiClientService } from '@app/shared/some-api-client/some-api-client.service';
import { RetryRequestService } from '@app/shared/retry-request/retry-request.service';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {

  constructor(
    private readonly someApiClientService: SomeApiClientService,
    private readonly retryRequestService: RetryRequestService,
  ) {
  }
  async sendRequest(): Promise<AxiosResponse | undefined> {
    try {
      const response: AxiosResponse = await this.retryRequestService.retryOnlyIfInternalServerErrorException(3, this.someApiClientService.request('500'));
      return response.data;
    } catch (e) {
      console.log('Error!');
      return e.message;
    }
  }
}
