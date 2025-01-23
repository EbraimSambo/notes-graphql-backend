import { CreateUserDTo } from 'src/user/dto/create-user.dto';
import { UserRepository } from 'src/user/repositories/user.repository/user.repository';
export declare class UserCretaeService {
    private repo;
    constructor(repo: UserRepository);
    save(fields: CreateUserDTo): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
