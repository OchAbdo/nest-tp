import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString } from "class-validator";

export class CreateUserDto 
{
    @ApiProperty()
    @IsString()
    nom : string ;

    @ApiProperty()
    @IsString()
    prenom : string ;

    @ApiProperty()
    @IsEmail()
    email : string ;
}
