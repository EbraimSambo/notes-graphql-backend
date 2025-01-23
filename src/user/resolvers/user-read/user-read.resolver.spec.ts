import { Test, TestingModule } from '@nestjs/testing';
import { UserReadResolver } from './user-read.resolver';

describe('UserReadResolver', () => {
  let resolver: UserReadResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserReadResolver],
    }).compile();

    resolver = module.get<UserReadResolver>(UserReadResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
