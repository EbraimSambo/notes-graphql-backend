import { Injectable } from '@nestjs/common';
import { CreateNoteDto } from 'src/notes/dto/create-note.dto';
import { NotesRepository } from 'src/notes/repositories/notes.repository/notes.repository';
import { UserService } from 'src/user/services/user/user.service';

@Injectable()
export class NotesCreateService {

    constructor(
        private repo: NotesRepository,
        private user_service: UserService
    ){}


    async save(fields: CreateNoteDto){
        await this.user_service.read.findById(fields.user_id)
        return await this.repo.create.save(fields)
    }
}
