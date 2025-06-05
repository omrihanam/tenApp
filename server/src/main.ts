import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3001);
  Logger.log('Mock API running on http://localhost:3001');
}
bootstrap();

/*
  frontend:
    build:
      context: ./client
    ports:
      - '3000:3000'
    depends_on:
      - backend
*/