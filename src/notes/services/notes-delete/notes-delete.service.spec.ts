import { Test, TestingModule } from '@nestjs/testing';
import { NotesDeleteService } from './notes-delete.service';

describe('NotesDeleteService', () => {
  let service: NotesDeleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesDeleteService],
    }).compile();

    service = module.get<NotesDeleteService>(NotesDeleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
