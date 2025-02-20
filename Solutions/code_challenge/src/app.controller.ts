/**
 * app.controller.ts
 *
 * Author: david mena
 * This file defines the AppController.
 * It handles the root route and returns a simple response.
 */

import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // Handle GET requests to the root route
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
