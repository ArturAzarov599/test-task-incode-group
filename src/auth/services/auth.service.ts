import {
  Inject,
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common'
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'

import { SignUpDto } from '@auth/dtos/sign-up.dto'

import { IUserService } from '@user/services/interfaces/user-service.interface'
import { IAuthService } from '@auth//services/interfaces/auth-service.interface'
import { IAuthRepository } from '@auth/repositories/interfaces/auth-repository.interface'

import { AUTH_REPOSITORY_TOKEN, USER_SERVICE_TOKEN } from '@tokens'

@Injectable()
export class AuthService implements IAuthService {
  constructor(
    @Inject(AUTH_REPOSITORY_TOKEN)
    private readonly authRepository: IAuthRepository,
    @Inject(USER_SERVICE_TOKEN) private readonly userService: IUserService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(email: string, password: string): Promise<string> {
    const credentials = await this.authRepository.getCredentials(email)

    if (!credentials)
      throw new NotFoundException(`Can't find user with these email`)

    const isMatch = await bcrypt.compare(password, credentials.password)

    if (!isMatch)
      throw new BadRequestException(`Cannot find user with these credentials`)

    const token = await this.jwtService.signAsync(
      { email },
      { secret: 'JWT_SECRET' },
    )

    return token
  }

  async signUp(dto: SignUpDto): Promise<boolean> {
    const { password, ...userData } = dto
    const hashPassword = await bcrypt.hash(password, 16)
    const credentials = await this.authRepository.getCredentials(userData.email)

    if (credentials)
      throw new BadRequestException(`User with this email already exists!`)

    await this.userService.createUser(userData)
    await this.authRepository.saveCredentials(userData.email, hashPassword)

    return true
  }
}
