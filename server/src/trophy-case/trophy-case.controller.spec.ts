import { Test, TestingModule } from '@nestjs/testing';
import { TrophyCaseController } from './trophy-case.controller';

describe('TrophyCaseController', () => {
  let controller: TrophyCaseController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrophyCaseController],
    }).compile();

    controller = module.get<TrophyCaseController>(TrophyCaseController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
