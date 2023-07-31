import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common'

import { ERoles } from '@common/enums/roles.enum'

import { UpdateUserBossDto } from '@user/dtos/update-user-boss.dto'
import { BossWithSubordinatesDto } from '@user/dtos/boss-with-subordinates.dto'

import { IUser } from 'src/common/interfaces/user.interface'
import { IUserService } from '@user/services/interfaces/user-service.interface'
import { IUserRepository } from '@user/repositories/interfaces/user-repository.interface'
import { IBossWithSubordinates } from '@user/interfaces/boss-with-subordinates.interface'

import { USER_REPOSITORY_TOKEN } from '@tokens'

@Injectable()
export class UserService implements IUserService {
  constructor(
    @Inject(USER_REPOSITORY_TOKEN)
    private readonly userRepository: IUserRepository,
  ) {}

  async createUser(dto: IUser): Promise<IUser> {
    const user = await this.userRepository.getUser(dto.email)

    if (user)
      throw new BadRequestException(`User with this email already existed`)

    if (dto.role === ERoles.BOSS)
      throw new BadRequestException(`Can't create employee with Boss role`)

    if (dto.bossEmail) {
      const bossUser = await this.userRepository.getUser(dto.bossEmail)

      if (!bossUser) throw new NotFoundException(`Can't find Boss user`)

      if (bossUser.role !== ERoles.BOSS) {
        await this.userRepository.updateUserRole(dto.bossEmail)
      }
    }

    return this.userRepository.createUser(dto)
  }

  async updateUserBoss(dto: UpdateUserBossDto): Promise<IUser> {
    const user = await this.userRepository.getUser(dto.email)

    if (!user) throw new NotFoundException(`Can't find user with this email`)

    if (user.bossEmail !== dto.bossEmail)
      throw new BadRequestException(`User boss don't match`)

    const newBoss = await this.userRepository.getUser(dto.newBossEmail)

    if (!newBoss) throw new NotFoundException(`Can't find boss with this email`)

    if (newBoss.role !== ERoles.BOSS)
      throw new BadRequestException(
        `User can't subordinate to non boss employee `,
      )

    return this.userRepository.updateUserBoss(dto)
  }

  async get(email: string): Promise<IBossWithSubordinates | IUser[] | IUser> {
    const user = await this.userRepository.getUser(email)

    if (!user) throw new NotFoundException(`Can't find user`)

    if (user.role === ERoles.USER) return user

    if (user.role === ERoles.ADMIN) return this.userRepository.getAll()

    if (user.role === ERoles.BOSS) {
      const users = await this.userRepository.getBossSubordinates(email)
      return BossWithSubordinatesDto.fromEntity(email, users)
    }

    throw new NotFoundException(`Role doesn't match`)
  }
}
