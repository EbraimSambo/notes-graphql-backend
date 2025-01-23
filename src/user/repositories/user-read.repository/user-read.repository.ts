import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database/database.service';

@Injectable()
export class UserReadRepository {
    constructor(
        private readonly database: DatabaseService
    ) { }


    async findByEmail(email: string){
        return await this.database.user.findUnique({
            where:{
                email,
            }
        })
    }
    

    async findById(id: number){
        return await this.database.user.findUnique({
            where:{
                id,
            }
        })
    }
}
