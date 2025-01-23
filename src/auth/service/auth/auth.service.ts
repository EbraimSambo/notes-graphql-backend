import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { LoginDto } from 'src/auth/dto/login.dto';
import { AuthRepository } from 'src/auth/repository/auth.repository/auth.repository';

@Injectable()
export class AuthService {
    constructor(
        private repo: AuthRepository
    ){}

    async login(fields: LoginDto){
        const user = await this.repo.findByEMail(fields.email)
        if(!user) throw new UnauthorizedException(`Email nao encontrado`)
        const hasded = await compare(fields.password, user.password)
        if(!hasded) throw new UnauthorizedException(`Senha errada`)
        return user
    }
}
