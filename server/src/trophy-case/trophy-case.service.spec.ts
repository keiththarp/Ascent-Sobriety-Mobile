import { Test, TestingModule } from '@nestjs/testing';
import { TrophyCaseService } from './trophy-case.service';

describe('TrophyCaseService', () => {
  let service: TrophyCaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrophyCaseService],
    }).compile();

    service = module.get<TrophyCaseService>(TrophyCaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
