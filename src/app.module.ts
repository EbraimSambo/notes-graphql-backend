import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { GraphqlModule } from './graphql/graphql.module';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [    
    ConfigModule.forRoot({isGlobal: true}),
     DatabaseModule, 
     GraphqlModule,
      UserModule,
      AuthModule,
      NotesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
