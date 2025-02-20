/**
 * tasks.service.ts
 *
 * Author: David Mena
 * This file contains the business logic for tasks.
 * It interacts with the database to create, read, update, and delete tasks.
 */

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from './task.entity';
import { TaskDto } from './task.dto';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task) // Inject the TaskRepository
    private tasksRepository: Repository<Task>,
  ) {}

  // Create and save a new task in the database using DTO
  async create(taskDto: TaskDto): Promise<Task> {
    const task = this.tasksRepository.create(taskDto);
    return this.tasksRepository.save(task);
  }

  // Get all tasks from the database
  async findAll(): Promise<Task[]> {
    return this.tasksRepository.find();
  }

  // Find a task by its id; throw an error if not found
  async findOne(id: number): Promise<Task> {
    const task = await this.tasksRepository.findOne({ where: { id } });
    if (!task) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
    return task;
  }

  // Update a task with the given id using DTO
  async update(id: number, taskDto: TaskDto): Promise<void> {
    const result = await this.tasksRepository.update(id, taskDto);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }

  // Remove a task by its id
  async remove(id: number): Promise<void> {
    const result = await this.tasksRepository.delete(id);
    if (result.affected === 0) {
      throw new NotFoundException(`Task with ID ${id} not found`);
    }
  }
}
