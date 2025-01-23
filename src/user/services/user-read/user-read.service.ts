import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from 'src/user/repositories/user.repository/user.repository';

@Injectable()
export class UserReadService {
    constructor(
        private repo: UserRepository
    ) { }

    async findById(id: number){
        const user = await this.repo.read.findById(id)
        if(!user) throw new NotFoundException("Usuarionao encontrado")
        return user;
    }
}
