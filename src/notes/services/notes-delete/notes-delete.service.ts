import { Injectable } from '@nestjs/common';
import { NotesRepository } from 'src/notes/repositories/notes.repository/notes.repository';
import { NotesReadService } from '../notes-read/notes-read.service';

@Injectable()
export class NotesDeleteService {
    constructor(
        private repo: NotesRepository,
        private note_read: NotesReadService,
    ) { }

    async delete(id: number){
        const note = await this.note_read.findOnde(id)
        return await this.repo.remove.delete(note.id)
    }

    async deletePermanent(id: number){
        const note = await this.note_read.findOnde(id)
        return await this.repo.remove.deletePermanent(note.id)
    }
}
