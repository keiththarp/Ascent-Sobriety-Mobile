import { Test, TestingModule } from '@nestjs/testing';
import { JournalEntryController } from './journal-entry.controller';

describe('JournalEntryController', () => {
  let controller: JournalEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [JournalEntryController],
    }).compile();

    controller = module.get<JournalEntryController>(JournalEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
