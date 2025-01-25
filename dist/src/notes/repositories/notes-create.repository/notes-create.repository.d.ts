import { DatabaseService } from 'src/database/services/database/database.service';
import { CreateNoteDto } from 'src/notes/dto/create-note.dto';
export declare class NotesCreateRepository {
    private readonly database;
    constructor(database: DatabaseService);
    save(fields: CreateNoteDto): Promise<{
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
