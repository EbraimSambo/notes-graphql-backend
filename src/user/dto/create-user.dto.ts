import { Field, InputType } from "@nestjs/graphql";
import { IsNotEmpty, IsString } from "class-validator";

@InputType()
export class CreateUserDTo{

    @Field(()=>String)
    @IsString()
    @IsNotEmpty()
    name: string
    
    @Field(()=>String)
    @IsString()
    @IsNotEmpty()
    email: string

    @Field(()=>String)
    @IsString()
    @IsNotEmpty()
    password: string
}