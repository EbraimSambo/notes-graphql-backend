import { Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { DatabaseService } from 'src/database/services/database/database.service';
import { CreateUserDTo } from 'src/user/dto/create-user.dto';

@Injectable()
export class UserCreateRepository {
    constructor(
        private readonly database: DatabaseService
    ) { }

    async save(
        fields: CreateUserDTo
    ) {
        const hashed = await hash(fields.password, 12)
        return await this.database.user.create({
            data: { ...fields, password: hashed  }
        })
    }

}
