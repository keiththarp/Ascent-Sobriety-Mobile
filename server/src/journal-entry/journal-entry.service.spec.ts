import { Test, TestingModule } from '@nestjs/testing';
import { JournalEntryService } from './journal-entry.service';

describe('JournalEntryService', () => {
  let service: JournalEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JournalEntryService],
    }).compile();

    service = module.get<JournalEntryService>(JournalEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
