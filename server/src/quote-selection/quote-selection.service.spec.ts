import { Test, TestingModule } from '@nestjs/testing';
import { QuoteSelectionService } from './quote-selection.service';

describe('QuoteSelectionService', () => {
  let service: QuoteSelectionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [QuoteSelectionService],
    }).compile();

    service = module.get<QuoteSelectionService>(QuoteSelectionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
