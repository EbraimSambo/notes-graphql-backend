import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
@InputType()
export class UpdateNotesDto  {
    @Field(() => String,{nullable: true})
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    title: string
    @Field(() => String, {nullable: true})
    @IsString()
    @IsNotEmpty()
    @IsOptional()
    content: string
}
