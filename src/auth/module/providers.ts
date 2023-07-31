import { JwtService } from '@nestjs/jwt'
import { Provider } from '@nestjs/common'

import { AuthService } from '@auth/services/auth.service'
import { AuthRepository } from '@auth/repositories/auth.repository'

import { AUTH_REPOSITORY_TOKEN, AUTH_SERVICE_TOKEN } from '@tokens'

export const providers: Provider[] = [
  {
    useClass: AuthService,
    provide: AUTH_SERVICE_TOKEN,
  },
  {
    useClass: AuthRepository,
    provide: AUTH_REPOSITORY_TOKEN,
  },
  JwtService,
]
