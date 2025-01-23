import { DatabaseService } from 'src/database/services/database/database.service';
export declare class NotesDeleteRepository {
    private readonly database;
    constructor(database: DatabaseService);
    delete(id: number): Promise<{
        id: number;
        created_at: Date;
        updated_at: Date;
        title: string;
        content: string;
        user_id: number;
        is_delete: boolean;
        category_id: number | null;
    }>;
    deletePermanent(id: number): Promise<{
        id: number;
        created_at: Date;
        updated_at: Date;
        title: string;
        content: string;
        user_id: number;
        is_delete: boolean;
        category_id: number | null;
    }>;
}
