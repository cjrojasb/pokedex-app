import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const API_PREFIX = 'api/v2';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix(API_PREFIX);
  await app.listen(8000);
}
bootstrap();
