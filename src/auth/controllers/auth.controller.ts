import { Body, Controller, Inject, Post } from '@nestjs/common'

import { SignInDto } from '@auth/dtos/sign-in.dto'
import { SignUpDto } from '@auth/dtos/sign-up.dto'

import { IAuthService } from '@auth/services/interfaces/auth-service.interface'

import { AUTH_SERVICE_TOKEN } from '@tokens'

@Controller('auth')
export class AuthController {
  constructor(
    @Inject(AUTH_SERVICE_TOKEN) private readonly authService: IAuthService,
  ) {}

  @Post('sign-in')
  signIn(@Body() dto: SignInDto): Promise<string> {
    return this.authService.signIn(dto.email, dto.password)
  }

  @Post('sign-up')
  signUp(@Body() dto: SignUpDto): Promise<boolean> {
    return this.authService.signUp(dto)
  }
}
