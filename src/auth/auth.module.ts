import { Module } from '@nestjs/common';
import { AuthRepository } from './repository/auth.repository/auth.repository';
import { DatabaseModule } from 'src/database/database.module';
import { AuthService } from './service/auth/auth.service';
import { AuthResolver } from './resolver/auth/auth.resolver';

@Module({
  imports: [
    DatabaseModule
  ],
  providers: [AuthRepository, AuthService, AuthResolver]
})
export class AuthModule {}
