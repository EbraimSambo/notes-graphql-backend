import { DatabaseService } from 'src/database/services/database/database.service';
import { CreateUserDTo } from 'src/user/dto/create-user.dto';
export declare class UserCreateRepository {
    private readonly database;
    constructor(database: DatabaseService);
    save(fields: CreateUserDTo): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
