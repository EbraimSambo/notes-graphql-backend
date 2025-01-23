import { Args, Int, Mutation, Resolver } from '@nestjs/graphql';
import { Note } from 'src/notes/entities/notes.entity';
import { NotesService } from 'src/notes/services/notes/notes.service';

@Resolver()
export class NotesDeleteResolver {
    constructor(
        private service: NotesService
    ) { }

    @Mutation(() => Note)
    async deleteNote(
        @Args('id', { type: () => Int }) id: number
    ) {
        return await this.service.remove.delete(id)
    }

    @Mutation(() => Note)
    async deleteNotePermanent(
        @Args('id', { type: () => Int }) id: number
    ) {
        return await this.service.remove.deletePermanent(id)
    }
}
