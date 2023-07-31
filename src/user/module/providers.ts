import { JwtService } from '@nestjs/jwt'
import { Provider } from '@nestjs/common'

import { UserService } from '@user/services/user.service'
import { UserRepository } from '@user/repositories/user.repository'

import { USER_REPOSITORY_TOKEN, USER_SERVICE_TOKEN } from '@tokens'

export const providers: Provider[] = [
  {
    useClass: UserRepository,
    provide: USER_REPOSITORY_TOKEN,
  },
  {
    useClass: UserService,
    provide: USER_SERVICE_TOKEN,
  },
  JwtService,
]
