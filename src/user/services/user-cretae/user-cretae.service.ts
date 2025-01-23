import { ConflictException, Injectable } from '@nestjs/common';
import { CreateUserDTo } from 'src/user/dto/create-user.dto';
import { UserRepository } from 'src/user/repositories/user.repository/user.repository';

@Injectable()
export class UserCretaeService {
    constructor(
        private repo:  UserRepository 
    ){}


    async save(
        fields: CreateUserDTo
    ){
        const user = await this.repo.read.findByEmail(fields.email)
        if(user) throw new ConflictException(`Este email ja foi utilizado`)
        return await this.repo.create.save(fields)
    }
}
