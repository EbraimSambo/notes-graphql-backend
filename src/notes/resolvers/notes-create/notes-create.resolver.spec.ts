import { Test, TestingModule } from '@nestjs/testing';
import { NotesCreateResolver } from './notes-create.resolver';

describe('NotesCreateResolver', () => {
  let resolver: NotesCreateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesCreateResolver],
    }).compile();

    resolver = module.get<NotesCreateResolver>(NotesCreateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
