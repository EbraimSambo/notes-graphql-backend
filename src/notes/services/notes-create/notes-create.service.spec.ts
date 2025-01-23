import { Test, TestingModule } from '@nestjs/testing';
import { NotesCreateService } from './notes-create.service';

describe('NotesCreateService', () => {
  let service: NotesCreateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesCreateService],
    }).compile();

    service = module.get<NotesCreateService>(NotesCreateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
