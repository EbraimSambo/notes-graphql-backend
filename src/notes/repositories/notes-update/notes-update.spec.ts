import { Test, TestingModule } from '@nestjs/testing';
import { NotesUpdate } from './notes-update';

describe('NotesUpdate', () => {
  let provider: NotesUpdate;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesUpdate],
    }).compile();

    provider = module.get<NotesUpdate>(NotesUpdate);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
