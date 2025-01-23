import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database/database.service';

@Injectable()
export class NotesDeleteRepository {
    constructor(
        private readonly database: DatabaseService
    ) { }

    async delete(id: number){
        return await this.database.note.update({
            where:{
                id
            },
            data:{
                is_delete: true
            }
        })
    }

    async deletePermanent(id: number){
        return await this.database.note.delete({
            where:{
                id
            },
        })
    }
}
