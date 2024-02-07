import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('manager');

  await app.listen(3003);

  Logger.verbose('Server running on port 3003', 'INICIALIZATION');
}
bootstrap();
