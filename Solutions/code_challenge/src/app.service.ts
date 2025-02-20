/**
 * app.service.ts
 *
 * Author: david mena
 * This file defines the AppService.
 * It provides core functionality for the application.
 */

import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  // Return a simple greeting message
  getHello(): string {
    return 'Hello World!';
  }
}
