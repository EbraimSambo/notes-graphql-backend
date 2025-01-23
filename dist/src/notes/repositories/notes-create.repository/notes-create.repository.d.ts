import { DatabaseService } from 'src/database/services/database/database.service';
import { CreateNoteDto } from 'src/notes/dto/create-note.dto';
export declare class NotesCreateRepository {
    private readonly database;
    constructor(database: DatabaseService);
    save(fields: CreateNoteDto): Promise<{
        title: string;
        content: string;
        user_id: number;
        id: number;
        is_delete: boolean;
        category_id: number | null;
        created_at: Date;
        updated_at: Date;
    }>;
}
