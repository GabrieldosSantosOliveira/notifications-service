import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  const config = new DocumentBuilder()
    .setTitle('Notifications service')
    .setDescription('notification microservice')
    .setVersion('1.0')
    .addTag('notification')
    .setContact(
      'Gabriel dos Santos Oliveira',
      'https://www.linkedin.com/in/gabriel-dos-santos-oliveira-24b67b243/',
      'gabrielsantosoliveira951@gmail.com',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
