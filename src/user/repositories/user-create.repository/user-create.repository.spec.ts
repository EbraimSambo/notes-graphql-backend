import { Test, TestingModule } from '@nestjs/testing';
import { UserCreateRepository } from './user-create.repository';

describe('UserCreateRepository', () => {
  let provider: UserCreateRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCreateRepository],
    }).compile();

    provider = module.get<UserCreateRepository>(UserCreateRepository);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
