/**
 * app.controller.spec.ts
 *
 * Author: david mena
 * This file contains basic tests to check if the AppController is defined
 * and returns the expected response.
 */

import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { beforeEach, describe, it } from 'node:test';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    // Verify that the controller returns "Hello World!"
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
