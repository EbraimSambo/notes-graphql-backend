import { NotesService } from 'src/notes/services/notes/notes.service';
export declare class NotesReadResolver {
    private service;
    constructor(service: NotesService);
    notes(user_id: number): Promise<{
        id: number;
        title: string;
        content: string;
        user_id: number;
        is_delete: boolean;
        category_id: number | null;
        created_at: Date;
        updated_at: Date;
    }[]>;
    note(id: number): Promise<{
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
