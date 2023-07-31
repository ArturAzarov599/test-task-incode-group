import { Module } from '@nestjs/common'

import { UserController } from '@user/controllers/user.controller'

import { imports } from '@user/module/imports'
import { providers } from '@user/module/providers'

@Module({
  imports,
  providers,
  controllers: [UserController],
  exports: providers,
})
export class UserModule {}
