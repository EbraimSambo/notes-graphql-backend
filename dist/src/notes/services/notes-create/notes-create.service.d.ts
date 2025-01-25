import { CreateNoteDto } from 'src/notes/dto/create-note.dto';
import { NotesRepository } from 'src/notes/repositories/notes.repository/notes.repository';
import { UserService } from 'src/user/services/user/user.service';
export declare class NotesCreateService {
    private repo;
    private user_service;
    constructor(repo: NotesRepository, user_service: UserService);
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
