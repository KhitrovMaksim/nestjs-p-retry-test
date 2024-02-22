import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class SomeApiClientService {
  constructor(
    private readonly httpService: HttpService,
  ) {
  }
  async request(path: string) {
    if (path === '500') return await this.httpService.axiosRef('http://localhost:3333/http-errors/internal-server-error')
    if (path === '200') {
      const res = await this.httpService.axiosRef('http://localhost:3333/http-errors/200')
      return res.data;
    }
    return '400'
  }
}
