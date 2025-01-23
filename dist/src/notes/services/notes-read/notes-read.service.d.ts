import { NotesRepository } from 'src/notes/repositories/notes.repository/notes.repository';
import { UserService } from 'src/user/services/user/user.service';
export declare class NotesReadService {
    private repo;
    private user_service;
    constructor(repo: NotesRepository, user_service: UserService);
    findAll(user_id: number): Promise<{
        id: number;
        title: string;
        content: string;
        user_id: number;
        is_delete: boolean;
        category_id: number | null;
        created_at: Date;
        updated_at: Date;
    }[]>;
    findOnde(id: number): Promise<{
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
