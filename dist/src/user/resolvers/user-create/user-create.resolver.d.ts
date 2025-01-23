import { CreateUserDTo } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/services/user/user.service';
export declare class UserCreateResolver {
    private user_service;
    constructor(user_service: UserService);
    createUser(fields: CreateUserDTo): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
