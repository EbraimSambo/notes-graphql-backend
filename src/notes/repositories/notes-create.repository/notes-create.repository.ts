import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database/database.service';
import { CreateNoteDto } from 'src/notes/dto/create-note.dto';

@Injectable()
export class NotesCreateRepository {
    constructor(
        private readonly database: DatabaseService
    ) { }

    async save(fields: CreateNoteDto){
        return await this.database.note.create({
            data: {...fields}
        })
    }
}
