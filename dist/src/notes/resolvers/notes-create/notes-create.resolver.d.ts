import { CreateNoteDto } from 'src/notes/dto/create-note.dto';
import { NotesService } from 'src/notes/services/notes/notes.service';
export declare class NotesCreateResolver {
    private service;
    constructor(service: NotesService);
    createNote(fields: CreateNoteDto): Promise<{
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
