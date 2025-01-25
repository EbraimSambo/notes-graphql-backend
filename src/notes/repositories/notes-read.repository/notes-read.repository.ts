import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database/database.service';

@Injectable()
export class NotesReadRepository {
    constructor(
        private readonly database: DatabaseService
    ) { }


    async findAllByUserId(user_id: number){
        return this.database.note.findMany({
            where:{
                user_id,
                is_delete:{
                    not: {
                        equals: true
                    }
                }
            },
            orderBy:{
                created_at: "desc"
            }
        })
    }

    async findAllByUserIdDeleted(user_id: number){
        return this.database.note.findMany({
            where:{
                user_id,
                is_delete:{
                    not: {
                        equals: false
                    }
                }
            },
            orderBy:{
                created_at: "desc"
            }
        })
    }

    async findOneId(id: number){
        return this.database.note.findUnique({
            where:{
                id,
            }
        })
    }
}
