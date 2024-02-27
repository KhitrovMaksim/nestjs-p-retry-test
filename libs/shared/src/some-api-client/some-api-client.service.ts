import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SomeApiClientService {
  constructor(
    private readonly httpService: HttpService,
  ) {
  }
  async request(path: string) {
    return await this.httpService.axiosRef(`http://localhost:3333/http-errors/${path}`)
  }
}
