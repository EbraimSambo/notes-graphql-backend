import { DatabaseService } from 'src/database/services/database/database.service';
import { UpdateNotesDto } from 'src/notes/dto/update-upadte-notes.dto';
export declare class NotesUpdateRepository {
    private readonly database;
    constructor(database: DatabaseService);
    update(fields: UpdateNotesDto, id: number): Promise<{
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
