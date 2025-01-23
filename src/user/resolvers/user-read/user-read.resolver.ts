import { Query, Resolver } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';

@Resolver()
export class UserReadResolver {

    @Query(()=>[User])
    async findAll(){
        return 
    }
}
