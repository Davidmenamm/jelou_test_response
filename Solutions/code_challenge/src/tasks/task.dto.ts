/* eslint-disable @typescript-eslint/no-unsafe-call */
/**
 * task.dto.ts
 *
 * Author: David Mena
 * Defines the Data Transfer Object (DTO) for tasks,
 * used for request validation and Swagger documentation.
 */

import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean, IsOptional } from 'class-validator';

// Task DTO
export class TaskDto {
  @ApiProperty({
    description: 'The title of the task',
    example: 'Buy groceries',
  })
  @IsString()
  title: string;

  @ApiProperty({
    description: 'A description of the task',
    example: 'Get milk and bread',
  })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiProperty({ description: 'Task completion status', example: false })
  @IsBoolean()
  @IsOptional()
  completed?: boolean;
}
