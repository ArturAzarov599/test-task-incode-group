import { IsEmail, IsString } from 'class-validator'

import { UserDto } from '@common/dtos/user.dto'

export class SignUpDto extends UserDto {
  @IsEmail()
  email: string

  @IsString()
  password: string
}
