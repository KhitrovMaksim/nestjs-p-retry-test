import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { SomeApiClientService } from '@app/shared/some-api-client/some-api-client.service';
import pRetry, { AbortError } from 'p-retry';
import { AxiosError, AxiosResponse } from 'axios';

@Injectable()
export class RetryRequestService {
  constructor(
  ) {
  }

  private async retry(retries: number, response: Promise<AxiosResponse>, callback: (error: any) => void ) {
    return pRetry(() => response, { retries, onFailedAttempt: callback })
  }

  async retryOnlyIfInternalServerErrorException(retries: number, response: Promise<AxiosResponse>) {
    return this.retry(retries, response, (error) => {
        if (error instanceof AxiosError && error.response && error.response.status && error.response.status !== 500) {
          throw new AbortError(error);
        }
    })
  }

  // async retryIfUnsuccessfulHttpRequestAndTimeout(retries: number, response: Promise<AxiosResponse>) {
  //   return this.retry(retries, response, (error) => {
  //     if (
  //       (error.message && error.message === 'canceled') ||
  //       (error instanceof UnsuccessfulHttpRequest &&
  //         error.response &&
  //         error.response.status &&
  //         error.response.status === 500)
  //     ) {
  //
  //     } else {
  //       throw new AbortError(error);
  //     }
  //   })
  // }
}
