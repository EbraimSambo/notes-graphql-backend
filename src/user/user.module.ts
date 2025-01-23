import { Module } from '@nestjs/common';
import { UserReadResolver } from './resolvers/user-read/user-read.resolver';
import { UserCreateResolver } from './resolvers/user-create/user-create.resolver';
import { UserRepository } from './repositories/user.repository/user.repository';
import { UserCreateRepository } from './repositories/user-create.repository/user-create.repository';
import { DatabaseModule } from 'src/database/database.module';
import { UserService } from './services/user/user.service';
import { UserCretaeService } from './services/user-cretae/user-cretae.service';
import { UserReadRepository } from './repositories/user-read.repository/user-read.repository';
import { UserReadService } from './services/user-read/user-read.service';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [
    UserReadResolver, 
    UserCreateResolver, 
    UserRepository, 
    UserCreateRepository, UserService, UserCretaeService, UserReadRepository, UserReadService,
  ],
  exports:[
    UserService
  ]
})
export class UserModule {}
