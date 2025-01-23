import { LoginDto } from 'src/auth/dto/login.dto';
import { AuthRepository } from 'src/auth/repository/auth.repository/auth.repository';
export declare class AuthService {
    private repo;
    constructor(repo: AuthRepository);
    login(fields: LoginDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
