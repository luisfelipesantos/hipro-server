import {
  IsDateString,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsPhoneNumber,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateUserDto {
  @IsDefined()
  @IsNotEmpty()
  @IsUUID()
  subid: string;

  @IsDefined()
  @IsNotEmpty()
  @IsPhoneNumber('BR')
  phone: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsDefined()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  gender: string;

  @IsDefined()
  @IsNotEmpty()
  @IsDateString()
  birthDate: string;
}
