import { DynamicModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'

import { UserEntity } from '@user/entities/user.entity'

export const imports: DynamicModule[] = [TypeOrmModule.forFeature([UserEntity])]
