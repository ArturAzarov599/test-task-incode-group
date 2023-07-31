import { Exclude } from 'class-transformer'

import { UserDto } from '@common/dtos/user.dto'

import { IUser } from '@common/interfaces/user.interface'

export class BossWithSubordinatesDto extends UserDto {
  @Exclude({ toPlainOnly: true })
  bossEmail: string

  subordinates: UserDto[]

  static fromEntity(email: string, users: IUser[]): BossWithSubordinatesDto {
    let boss: UserDto = null
    const subordinates = users.filter((user) => {
      if (user.email !== email) return true

      boss = user
      return false
    })

    return {
      ...boss,
      subordinates,
    } as BossWithSubordinatesDto
  }
}
