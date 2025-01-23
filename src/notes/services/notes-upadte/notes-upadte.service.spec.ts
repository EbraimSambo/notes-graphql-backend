import { Test, TestingModule } from '@nestjs/testing';
import { NotesUpadteService } from './notes-upadte.service';

describe('NotesUpadteService', () => {
  let service: NotesUpadteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NotesUpadteService],
    }).compile();

    service = module.get<NotesUpadteService>(NotesUpadteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
