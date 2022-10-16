import { IsNotEmpty, MinLength } from "class-validator";

export class CreateOwnerDto {
    @IsNotEmpty()
    @MinLength(3)
    firstname: string;

    @IsNotEmpty()
    @MinLength(3)
    lastname: string;

    @IsNotEmpty()
    @MinLength(3)
    address: string;

    @IsNotEmpty()
    @MinLength(3)
    city: string;

    @IsNotEmpty()
    @MinLength(10)
    telephone: string;
    
}