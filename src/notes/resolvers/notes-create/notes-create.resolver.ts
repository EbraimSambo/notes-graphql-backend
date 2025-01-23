import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateNoteDto } from 'src/notes/dto/create-note.dto';
import { Note } from 'src/notes/entities/notes.entity';
import { NotesService } from 'src/notes/services/notes/notes.service';

@Resolver()
export class NotesCreateResolver {
    constructor(
        private service: NotesService
    ){}

    @Mutation(()=>Note)
    async createNote(
        @Args('fields') fields: CreateNoteDto
    ){
        return await this.service.create.save(fields)
    }
}
