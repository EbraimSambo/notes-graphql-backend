import { Injectable } from '@nestjs/common';
import { UserCretaeService } from '../user-cretae/user-cretae.service';
import { UserReadService } from '../user-read/user-read.service';

@Injectable()
export class UserService {
    constructor(
        public create: UserCretaeService,
        public read: UserReadService,
    ){}
}
