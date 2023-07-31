import { IsEmail } from 'class-validator'

export class UpdateUserBossDto {
  @IsEmail()
  email: string

  @IsEmail()
  bossEmail: string

  @IsEmail()
  newBossEmail: string
}
