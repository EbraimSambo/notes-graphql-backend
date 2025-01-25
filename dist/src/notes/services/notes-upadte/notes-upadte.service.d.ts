import { NotesReadService } from '../notes-read/notes-read.service';
import { NotesRepository } from 'src/notes/repositories/notes.repository/notes.repository';
import { UpdateNotesDto } from 'src/notes/dto/update-upadte-notes.dto';
export declare class NotesUpadteService {
    private repo;
    private note_read;
    constructor(repo: NotesRepository, note_read: NotesReadService);
    upadate(fields: UpdateNotesDto, id: number): Promise<{
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
