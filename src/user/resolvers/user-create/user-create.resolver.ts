import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateUserDTo } from 'src/user/dto/create-user.dto';
import { User } from 'src/user/entities/user.entity';
import { UserService } from 'src/user/services/user/user.service';

@Resolver()
export class UserCreateResolver {
    constructor(
        private user_service: UserService
    ){}

    @Mutation(()=>User)
    async createUser(
        @Args('fields') fields: CreateUserDTo
    ){
        return await this.user_service.create.save(fields)
    }
}
