import { Test, TestingModule } from '@nestjs/testing';
import { NotesReadResolver } from './notes-read.resolver';

describe('NotesReadResolver', () => {
  let resolver: NotesReadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesReadResolver],
    }).compile();

    resolver = module.get<NotesReadResolver>(NotesReadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
