import { Test, TestingModule } from '@nestjs/testing';
import { NotesRepository } from './notes.repository';

describe('NotesRepository', () => {
  let provider: NotesRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesRepository],
    }).compile();

    provider = module.get<NotesRepository>(NotesRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
