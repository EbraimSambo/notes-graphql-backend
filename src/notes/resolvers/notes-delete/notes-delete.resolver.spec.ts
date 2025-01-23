import { Test, TestingModule } from '@nestjs/testing';
import { NotesDeleteResolver } from './notes-delete.resolver';

describe('NotesDeleteResolver', () => {
  let resolver: NotesDeleteResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesDeleteResolver],
    }).compile();

    resolver = module.get<NotesDeleteResolver>(NotesDeleteResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
