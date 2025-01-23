import { Test, TestingModule } from '@nestjs/testing';
import { NotesReadService } from './notes-read.service';

describe('NotesReadService', () => {
  let service: NotesReadService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesReadService],
    }).compile();

    service = module.get<NotesReadService>(NotesReadService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
