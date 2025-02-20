/**
 * tasks.controller.ts
 *
 * Author: David Mena
 * This file handles the routes for tasks.
 * It connects HTTP requests to the tasks service for creating,
 * reading, updating, and deleting tasks.
 */

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  HttpCode,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
import { TaskDto } from './task.dto';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiParam,
  ApiBody,
} from '@nestjs/swagger';

@ApiTags('tasks')
@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  // Create a new task
  @Post()
  @ApiOperation({ summary: 'Create a new task' })
  @ApiResponse({
    status: 201,
    description: 'Task created successfully',
    type: Task,
  })
  @ApiBody({ type: TaskDto, description: 'Task data to create' })
  @HttpCode(201)
  create(@Body() taskDto: TaskDto): Promise<Task> {
    return this.tasksService.create(taskDto);
  }

  // Get all tasks
  @Get()
  @ApiOperation({ summary: 'Retrieve all tasks' })
  @ApiResponse({ status: 200, description: 'List of all tasks', type: [Task] })
  findAll(): Promise<Task[]> {
    return this.tasksService.findAll();
  }

  // Get a specific task by ID
  @Get(':id')
  @ApiOperation({ summary: 'Retrieve a task by ID' })
  @ApiParam({ name: 'id', description: 'Task ID', type: String })
  @ApiResponse({ status: 200, description: 'Task found', type: Task })
  @ApiResponse({ status: 404, description: 'Task not found' })
  findOne(@Param('id') id: string): Promise<Task> {
    return this.tasksService.findOne(+id);
  }

  // Update a task by ID
  @Put(':id')
  @ApiOperation({ summary: 'Update a task by ID' })
  @ApiParam({ name: 'id', description: 'Task ID', type: String })
  @ApiBody({ type: TaskDto, description: 'Updated task data' })
  @ApiResponse({
    status: 200,
    description: 'Task updated successfully',
    type: Task,
  })
  @ApiResponse({ status: 404, description: 'Task not found' })
  update(@Param('id') id: string, @Body() taskDto: TaskDto): Promise<void> {
    return this.tasksService.update(+id, taskDto);
  }

  // Delete a task by ID
  @Delete(':id')
  @ApiOperation({ summary: 'Delete a task by ID' })
  @ApiParam({ name: 'id', description: 'Task ID', type: String })
  @ApiResponse({ status: 204, description: 'Task deleted successfully' })
  @ApiResponse({ status: 404, description: 'Task not found' })
  @HttpCode(204)
  remove(@Param('id') id: string): Promise<void> {
    return this.tasksService.remove(+id);
  }
}
