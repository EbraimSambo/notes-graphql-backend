import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class User{

    @Field(()=> Int)
    id: number

    @Field(()=> String)
    name: string

    @Field(()=> String)
    email: string

    @Field(()=> String,{nullable: true})
    password: string | null

    @Field(()=> String)
    created_at: string

    @Field(()=> String)
    updated_at: string
}