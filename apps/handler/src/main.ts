import { NestFactory } from '@nestjs/core';
import { HandlerModule } from './handler.module';

async function bootstrap() {
  const app = await NestFactory.create(HandlerModule);
  await app.listen(3000);
}
bootstrap();
