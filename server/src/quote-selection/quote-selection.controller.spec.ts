import { Test, TestingModule } from '@nestjs/testing';
import { QuoteSelectionController } from './quote-selection.controller';

describe('QuoteSelectionController', () => {
  let controller: QuoteSelectionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [QuoteSelectionController],
    }).compile();

    controller = module.get<QuoteSelectionController>(QuoteSelectionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
