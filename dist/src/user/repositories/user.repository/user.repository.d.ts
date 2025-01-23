import { UserCreateRepository } from '../user-create.repository/user-create.repository';
import { UserReadRepository } from '../user-read.repository/user-read.repository';
export declare class UserRepository {
    create: UserCreateRepository;
    read: UserReadRepository;
    constructor(create: UserCreateRepository, read: UserReadRepository);
}
