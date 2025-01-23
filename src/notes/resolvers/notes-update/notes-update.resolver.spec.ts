import { Test, TestingModule } from '@nestjs/testing';
import { NotesUpdateResolver } from './notes-update.resolver';

describe('NotesUpdateResolver', () => {
  let resolver: NotesUpdateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesUpdateResolver],
    }).compile();

    resolver = module.get<NotesUpdateResolver>(NotesUpdateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
