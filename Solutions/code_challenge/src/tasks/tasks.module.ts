/**
 * tasks.module.ts
 *
 * Author: david mena
 * This file sets up the Tasks module.
 * It registers the TasksService and TasksController.
 */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksService } from './tasks.service';
import { TasksController } from './tasks.controller';
import { Task } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Task])], // Register the Task entity
  providers: [TasksService],
  controllers: [TasksController],
})
export class TasksModule {}
