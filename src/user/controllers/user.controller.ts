import {
  Body,
  Controller,
  Get,
  Inject,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common'

import { AuthGuard } from '@common/guards/auth.guard'

import { UserDto } from '@common/dtos/user.dto'
import { UpdateUserBossDto } from '@user/dtos/update-user-boss.dto'
import { BossWithSubordinatesDto } from '@user/dtos/boss-with-subordinates.dto'

import { IUserService } from '@user/services/interfaces/user-service.interface'

import { USER_SERVICE_TOKEN } from '@tokens'

@UseGuards(AuthGuard)
@Controller('user')
export class UserController {
  constructor(
    @Inject(USER_SERVICE_TOKEN) private readonly userService: IUserService,
  ) {}

  @Get()
  get(
    @Query('email') email: string,
  ): Promise<BossWithSubordinatesDto | UserDto[] | UserDto> {
    return this.userService.get(email)
  }

  @Put()
  updateUserBoss(@Body() dto: UpdateUserBossDto): Promise<UserDto> {
    return this.userService.updateUserBoss(dto)
  }
}
