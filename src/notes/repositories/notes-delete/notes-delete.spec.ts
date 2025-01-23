import { Test, TestingModule } from '@nestjs/testing';
import { NotesDelete } from './notes-delete';

describe('NotesDelete', () => {
  let provider: NotesDelete;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesDelete],
    }).compile();

    provider = module.get<NotesDelete>(NotesDelete);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
