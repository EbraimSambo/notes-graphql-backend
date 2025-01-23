import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database/database.service';
import { UpdateNotesDto } from 'src/notes/dto/update-upadte-notes.dto';

@Injectable()
export class NotesUpdateRepository {
    constructor(
        private readonly database: DatabaseService
    ) { }

    async update(fields: UpdateNotesDto, id: number){
        return await this.database.note.update({
            where:{
                id
            },
            data:{
                ...fields
            }
        })
    }
}
