import { UserRepository } from 'src/user/repositories/user.repository/user.repository';
export declare class UserReadService {
    private repo;
    constructor(repo: UserRepository);
    findById(id: number): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
