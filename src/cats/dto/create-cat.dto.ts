import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateCatDto 
{
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsInt()
    @IsPositive()
    age: number;

    @ApiProperty()
    @IsString()
    @IsOptional()
    breed: string;
}
