import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { SomeApiClientModule } from './some-api-client/some-api-client.module';
import { RetryRequestModule } from './retry-request/retry-request.module';

@Module({
  providers: [SharedService],
  exports: [SharedService],
  imports: [SomeApiClientModule, RetryRequestModule],
})
export class SharedModule {}
