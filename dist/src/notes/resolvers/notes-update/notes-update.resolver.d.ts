import { UpdateNotesDto } from 'src/notes/dto/update-upadte-notes.dto';
import { NotesService } from 'src/notes/services/notes/notes.service';
export declare class NotesUpdateResolver {
    private service;
    constructor(service: NotesService);
    updateNote(fields: UpdateNotesDto, id: number): Promise<{
        id: number;
        title: string;
        content: string;
        user_id: number;
        is_delete: boolean;
        category_id: number | null;
        created_at: Date;
        updated_at: Date;
    }>;
}
