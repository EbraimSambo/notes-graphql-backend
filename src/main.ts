import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: {
      allowedHeaders: [
        'Accept',
        'Authorization',
        'Content-Type',
        'X-Request-With',
        'apollo-require-preflight'
      ],
      origin: ['http://localhost:3000',process.env.URL_CORS]
    }
  });
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    transform: true,
  }),);
  await app.listen(process.env.PORT ?? 3002);
}
bootstrap();
