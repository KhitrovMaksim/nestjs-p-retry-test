import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { SomeApiClientService } from '@app/shared/some-api-client/some-api-client.service';

@Module({
  imports: [
    HttpModule,
  ],
  providers: [
    SomeApiClientService,
  ],
  exports: [
    SomeApiClientService,
  ],
})
export class SomeApiClientModule {
}
