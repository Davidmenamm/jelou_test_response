/**
 * tasks.service.specs.ts
 *
 * Author: david mena
 * This file contains unit tests for the TasksService.
 * It verifies that the TasksService is defined and functioning.
 */

import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { beforeEach, describe, it } from 'node:test';

describe('TasksService', () => {
  let service: TasksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TasksService],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  // Check if the service is defined
  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
