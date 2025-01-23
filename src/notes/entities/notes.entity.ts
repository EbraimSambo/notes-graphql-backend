import { Field, Int, ObjectType } from "@nestjs/graphql";
import { User } from "src/user/entities/user.entity";

@ObjectType()
export class Note {
    @Field(() => Int)
    id: number
    @Field(() => String)
    title: string
    @Field(() => String)
    content: string
    @Field(() => Int)
    user_id: number
    @Field(() => User, {nullable: true})
    user: User
    @Field(() => String)
    created_at: string
    @Field(() => String)
    updated_at: string
    @Field(() => Boolean)
    is_delete: boolean
}