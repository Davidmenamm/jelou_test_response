/**
 * app.module.ts
 *
 * Author: david mena
 * This file defines the main application module.
 * It sets up database connection, logging, and task management features.
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';
import { TasksModule } from './tasks/tasks.module';
import { Task } from './tasks/task.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT || '3306', 10),
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || 'rootpassword',
      database: process.env.DB_DATABASE || 'todo_db',
      entities: [Task],
      synchronize: true,
      retryAttempts: 5, // Reduce from default 10
      retryDelay: 1000, // Reduce from default 3000ms to retry faster
    }),
    WinstonModule.forRoot({
      transports: [
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
        }),
        new winston.transports.File({ filename: 'logs/combined.log' }),
      ],
    }),
    TasksModule,
  ],
})
export class AppModule {}
