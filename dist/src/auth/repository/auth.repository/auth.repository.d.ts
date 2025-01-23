import { DatabaseService } from 'src/database/services/database/database.service';
export declare class AuthRepository {
    private readonly database;
    constructor(database: DatabaseService);
    findByEMail(email: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
