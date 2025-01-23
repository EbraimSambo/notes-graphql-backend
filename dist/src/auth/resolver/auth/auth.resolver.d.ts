import { LoginDto } from 'src/auth/dto/login.dto';
import { AuthService } from 'src/auth/service/auth/auth.service';
export declare class AuthResolver {
    private auth_service;
    constructor(auth_service: AuthService);
    login(fields: LoginDto): Promise<{
        id: number;
        name: string;
        email: string;
        password: string;
        created_at: Date;
        updated_at: Date;
    }>;
}
