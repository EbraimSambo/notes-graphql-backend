import { Test, TestingModule } from '@nestjs/testing';
import { NotesCreateRepository } from './notes-create.repository';

describe('NotesCreateRepository', () => {
  let provider: NotesCreateRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesCreateRepository],
    }).compile();

    provider = module.get<NotesCreateRepository>(NotesCreateRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
