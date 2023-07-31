import { UpdateResult } from 'typeorm'
import { UserEntity } from '@user/entities/user.entity'

import { UpdateUserBossDto } from '@user/dtos/update-user-boss.dto'

import { IUser } from 'src/common/interfaces/user.interface'

export interface IUserRepository {
  updateUserBoss(dto: UpdateUserBossDto): Promise<UserEntity>
  getAll(): Promise<UserEntity[]>
  getUser(email: string): Promise<UserEntity>
  getBossSubordinates(email: string): Promise<UserEntity[]>
  createUser(dto: IUser): Promise<UserEntity>
  updateUserRole(email: string): Promise<UpdateResult>
}
