import { NotesRepository } from 'src/notes/repositories/notes.repository/notes.repository';
import { NotesReadService } from '../notes-read/notes-read.service';
export declare class NotesDeleteService {
    private repo;
    private note_read;
    constructor(repo: NotesRepository, note_read: NotesReadService);
    delete(id: number): Promise<{
        id: number;
        title: string;
        content: string;
        user_id: number;
        is_delete: boolean;
        category_id: number | null;
        created_at: Date;
        updated_at: Date;
    }>;
    deletePermanent(id: number): Promise<{
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
