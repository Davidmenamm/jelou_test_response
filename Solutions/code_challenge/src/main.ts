/**
 * main.ts
 *
 * Author: David Mena
 * This is the entry point of the application.
 * It initializes the NestJS app and sets up Swagger for API documentation.
 */

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation pipe for incoming requests
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Automatically transform payloads to DTO types
      whitelist: true, // Strip properties not defined in DTOs
    }),
  );

  // Set up Swagger for API documentation
  const config = new DocumentBuilder()
    .setTitle('Todo List API')
    .setDescription('API for managing tasks in a todo list application')
    .setVersion('1.0')
    .addTag('tasks') // Tag for grouping endpoints
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // Swagger UI available at /api

  // Start the application on the specified port or default to 3000
  const port = process.env.PORT || 3000;
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
  console.log(`Swagger UI available at: http://localhost:${port}/api`);
}

bootstrap().catch((err) => {
  console.error('Failed to start application:', err);
  process.exit(1);
});
