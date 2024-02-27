import { Module } from '@nestjs/common';
import { RetryRequestService } from '@app/shared/retry-request/retry-request.service';
import { SomeApiClientModule } from '@app/shared/some-api-client/some-api-client.module';

@Module({
  imports: [
    // SomeApiClientModule,
  ],
  providers: [
    RetryRequestService,
  ],
  exports: [
    RetryRequestService,
  ],
})
export class RetryRequestModule {
}
