import { Repository, UpdateResult } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { UserEntity } from '@user/entities/user.entity'

import { ERoles } from '@common/enums/roles.enum'

import { UpdateUserBossDto } from '@user/dtos/update-user-boss.dto'

import { IUser } from '@common/interfaces/user.interface'
import { IUserRepository } from '@user/repositories/interfaces/user-repository.interface'

@Injectable()
export class UserRepository implements IUserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private readonly repository: Repository<UserEntity>,
  ) {}

  createUser(dto: IUser): Promise<IUser> {
    return this.repository.save(dto)
  }

  updateUserBoss(dto: UpdateUserBossDto): Promise<UserEntity> {
    return this.repository.save(dto)
  }

  getAll(): Promise<UserEntity[]> {
    return this.repository.find()
  }

  getUser(email: string): Promise<UserEntity> {
    return this.repository.findOne({ where: { email } })
  }

  getBossSubordinates(email: string): Promise<UserEntity[]> {
    return this.repository.query(`
      WITH RECURSIVE r AS (
        SELECT email, role, first_name AS "firstName", last_name AS "lastName", 1 AS lvl FROM "user"
        WHERE email = '${email}'
      
        UNION ALL
      
        SELECT u.email, u.role, u.first_name AS "firstName", u.last_name AS "lastName", r.lvl + 1 AS lvl FROM "user" AS u
        JOIN r ON u.boss_email = r.email
      )
    
      SELECT * FROM r;
    `)
  }

  updateUserRole(email: string): Promise<UpdateResult> {
    return this.repository.update({ email }, { role: ERoles.BOSS })
  }
}
