import { Module } from '@nestjs/common';
import { NotesCreateRepository } from './repositories/notes-create.repository/notes-create.repository';
import { NotesRepository } from './repositories/notes.repository/notes.repository';
import { NotesReadRepository } from './repositories/notes-read.repository/notes-read.repository';
import { NotesService } from './services/notes/notes.service';
import { NotesCreateService } from './services/notes-create/notes-create.service';
import { NotesReadService } from './services/notes-read/notes-read.service';
import { DatabaseModule } from 'src/database/database.module';
import { UserModule } from 'src/user/user.module';
import { NotesUpadteService } from './services/notes-upadte/notes-upadte.service';
import { NotesDeleteService } from './services/notes-delete/notes-delete.service';
import { NotesCreateResolver } from './resolvers/notes-create/notes-create.resolver';
import { NotesReadResolver } from './resolvers/notes-read/notes-read.resolver';
import { NotesDeleteResolver } from './resolvers/notes-delete/notes-delete.resolver';
import { NotesUpdateResolver } from './resolvers/notes-update/notes-update.resolver';
import { NotesUpdateRepository } from './repositories/notes-update/notes-update';
import { NotesDeleteRepository } from './repositories/notes-delete/notes-delete';

@Module({
  imports:[
    DatabaseModule,
    UserModule
  ],
  providers: [NotesCreateRepository,
     NotesRepository, NotesReadRepository,
      NotesService, NotesCreateService, NotesReadService, 
      NotesUpdateRepository, NotesDeleteRepository, NotesUpadteService, NotesDeleteService, NotesCreateResolver, NotesReadResolver, NotesDeleteResolver, NotesUpdateResolver]
})
export class NotesModule {}
