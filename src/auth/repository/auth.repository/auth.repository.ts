import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/services/database/database.service';

@Injectable()
export class AuthRepository {
    constructor(
        private readonly database: DatabaseService
    ) { }

    async findByEMail(email: string){
        return await this.database.user.findUnique({
            where:{
                email
            }
        })
    }
}
