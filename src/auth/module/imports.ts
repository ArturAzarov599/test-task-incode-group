import { TypeOrmModule } from '@nestjs/typeorm'

import { UserModule } from '@user/module/user.module'

import { AuthEntity } from '@auth/entities/auth.entity'

export const imports = [UserModule, TypeOrmModule.forFeature([AuthEntity])]
