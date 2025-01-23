import { Injectable } from '@nestjs/common';
import { UserCreateRepository } from '../user-create.repository/user-create.repository';
import { UserReadRepository } from '../user-read.repository/user-read.repository';

@Injectable()
export class UserRepository {
    constructor(
        public create: UserCreateRepository,
        public read: UserReadRepository,
    ){}
}
