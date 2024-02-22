import { Test, TestingModule } from '@nestjs/testing';
import { HandlerController } from './handler.controller';
import { HandlerService } from './handler.service';

describe('HandlerController', () => {
  let handlerController: HandlerController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [HandlerController],
      providers: [HandlerService],
    }).compile();

    handlerController = app.get<HandlerController>(HandlerController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(handlerController.getHello()).toBe('Hello World!');
    });
  });
});
