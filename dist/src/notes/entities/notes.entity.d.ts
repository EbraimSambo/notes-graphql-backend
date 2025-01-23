import { User } from "src/user/entities/user.entity";
export declare class Note {
    id: number;
    title: string;
    content: string;
    user_id: number;
    user: User;
    created_at: string;
    updated_at: string;
    is_delete: boolean;
}
