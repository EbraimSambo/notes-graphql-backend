import { Injectable, NotFoundException } from '@nestjs/common';
import { NotesRepository } from 'src/notes/repositories/notes.repository/notes.repository';
import { UserService } from 'src/user/services/user/user.service';

@Injectable()
export class NotesReadService {
    constructor(
        private repo: NotesRepository,
         private user_service: UserService
    ) { }


    async findAll(user_id: number){
        await this.user_service.read.findById(user_id)
        return await this.repo.read.findAllByUserId(user_id)
    }

    async findOnde(id: number){
        const note = await this.repo.read.findOneId(id)
        if(!note) throw new NotFoundException("nOTA NAO ENCONTRADA")
        return note
    }
}
