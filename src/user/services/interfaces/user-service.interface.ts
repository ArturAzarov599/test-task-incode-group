import { IUser } from 'src/common/interfaces/user.interface'

import { UserDto } from '@common/dtos/user.dto'
import { UpdateUserBossDto } from '@user/dtos/update-user-boss.dto'
import { IBossWithSubordinates } from '@user/interfaces/boss-with-subordinates.interface'

export interface IUserService {
  updateUserBoss(dto: UpdateUserBossDto): Promise<IUser>
  get(email: string): Promise<IBossWithSubordinates | IUser[] | IUser>
  createUser(dto: UserDto): Promise<IUser>
}
