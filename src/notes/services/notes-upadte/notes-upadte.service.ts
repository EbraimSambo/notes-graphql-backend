import { Injectable } from '@nestjs/common';
import { NotesReadService } from '../notes-read/notes-read.service';
import { NotesRepository } from 'src/notes/repositories/notes.repository/notes.repository';
import { UpdateNotesDto } from 'src/notes/dto/update-upadte-notes.dto';

@Injectable()
export class NotesUpadteService {
    constructor(
        private repo: NotesRepository,
        private note_read: NotesReadService,
    ) { }

    async upadate(fields: UpdateNotesDto,id: number) {
        const note = await this.note_read.findOnde(id)
        return await this.repo.update.update(fields,note.id)
    }
}
