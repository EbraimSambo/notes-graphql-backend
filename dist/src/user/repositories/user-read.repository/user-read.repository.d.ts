import { DatabaseService } from 'src/database/services/database/database.service';
export declare class UserReadRepository {
    private readonly database;
    constructor(database: DatabaseService);
    findByEmail(email: string): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }>;
    findById(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
