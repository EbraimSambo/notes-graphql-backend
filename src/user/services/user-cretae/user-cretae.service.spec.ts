import { Test, TestingModule } from '@nestjs/testing';
import { UserCretaeService } from './user-cretae.service';

describe('UserCretaeService', () => {
  let service: UserCretaeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCretaeService],
    }).compile();

    service = module.get<UserCretaeService>(UserCretaeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
