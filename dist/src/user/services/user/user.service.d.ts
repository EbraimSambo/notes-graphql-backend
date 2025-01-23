import { UserCretaeService } from '../user-cretae/user-cretae.service';
import { UserReadService } from '../user-read/user-read.service';
export declare class UserService {
    create: UserCretaeService;
    read: UserReadService;
    constructor(create: UserCretaeService, read: UserReadService);
}
