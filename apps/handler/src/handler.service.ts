import { Injectable } from '@nestjs/common';

@Injectable()
export class HandlerService {
  getHello(): string {
    return 'Hello World!';
  }
}
