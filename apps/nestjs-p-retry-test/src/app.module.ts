import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SomeApiClientModule } from '@app/shared/some-api-client/some-api-client.module';

@Module({
  imports: [
    SomeApiClientModule,
  ],
  controllers: [
    AppController,
  ],
  providers: [
    AppService,
  ],
})
export class AppModule {}
