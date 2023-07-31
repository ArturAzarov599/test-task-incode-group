import {
  IsEmail,
  IsString,
  IsEnum,
  MinLength,
  IsOptional,
} from 'class-validator'

import { ERoles } from '@common/enums/roles.enum'
import { IUser } from '@common/interfaces/user.interface'

export class UserDto implements IUser {
  @IsEmail()
  email: string

  @IsString()
  @MinLength(2)
  firstName: string

  @IsString()
  @MinLength(2)
  lastName: string

  @IsEnum(ERoles)
  role: ERoles

  @IsEmail()
  @IsOptional()
  bossEmail: string
}
