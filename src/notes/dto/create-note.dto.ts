import { Field, InputType, Int } from "@nestjs/graphql"
import { IsNotEmpty, IsNumber, IsString } from "class-validator"

@InputType()
export class CreateNoteDto {
    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    title: string
    @Field(() => String)
    @IsString()
    @IsNotEmpty()
    content: string
    
    @Field(() => Int)
    @IsNotEmpty()
    @IsNumber()
    user_id: number
}