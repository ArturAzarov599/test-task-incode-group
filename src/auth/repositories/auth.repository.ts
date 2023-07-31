import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { AuthEntity } from '@auth/entities/auth.entity'
import { IAuthRepository } from '@auth/repositories/interfaces/auth-repository.interface'

@Injectable()
export class AuthRepository implements IAuthRepository {
  constructor(
    @InjectRepository(AuthEntity)
    private readonly repository: Repository<AuthEntity>,
  ) {}

  getCredentials(email: string): Promise<AuthEntity> {
    return this.repository.findOne({ where: { email } })
  }

  saveCredentials(email: string, password: string): Promise<AuthEntity> {
    return this.repository.save({ email, password })
  }
}
