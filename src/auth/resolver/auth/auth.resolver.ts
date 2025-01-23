import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { LoginDto } from 'src/auth/dto/login.dto';
import { AuthService } from 'src/auth/service/auth/auth.service';
import { User } from 'src/user/entities/user.entity';

@Resolver()
export class AuthResolver {

    constructor(
        private auth_service: AuthService
    ){}
    @Mutation(()=>User)
    async login(
        @Args('fields') fields: LoginDto
    ){
        return await this.auth_service.login(fields)
    }
    
}
