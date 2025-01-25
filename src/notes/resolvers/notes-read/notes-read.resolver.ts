import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { Note } from 'src/notes/entities/notes.entity';
import { NotesService } from 'src/notes/services/notes/notes.service';

@Resolver()
export class NotesReadResolver {
    constructor(
        private service: NotesService
    ) { }


    @Query(()=>[Note])
    async notes(
        @Args('user_id', {type: ()=>Int}) user_id: number 
    ){
        return await this.service.read.findAll(user_id)
    }


    @Query(()=>[Note])
    async notesDeleted(
        @Args('user_id', {type: ()=>Int}) user_id: number 
    ){
        return await this.service.read.findAllDeleted(user_id)
    }


    @Query(()=>Note)
    async note(
        @Args('id', {type: ()=>Int}) id: number 
    ){
        return await this.service.read.findOnde(id)
    }
}
