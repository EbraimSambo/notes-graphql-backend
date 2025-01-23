import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { UpdateNotesDto, } from 'src/notes/dto/update-upadte-notes.dto';
import { Note } from 'src/notes/entities/notes.entity';
import { NotesService } from 'src/notes/services/notes/notes.service';

@Resolver()
export class NotesUpdateResolver {
    constructor(
        private service: NotesService
    ) { }

    @Mutation(() => Note)
    async updateNote(
        @Args('fields') fields: UpdateNotesDto,
        @Args('id', { type: () => Int }) id: number,
    ) {
        return await this.service.update.upadate(fields,id)
    }
}
