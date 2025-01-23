import { Test, TestingModule } from '@nestjs/testing';
import { NotesReadRepository } from './notes-read.repository';

describe('NotesReadRepository', () => {
  let provider: NotesReadRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesReadRepository],
    }).compile();

    provider = module.get<NotesReadRepository>(NotesReadRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
