import { AuthEntity } from '@auth/entities/auth.entity'

export interface IAuthRepository {
  getCredentials(email: string): Promise<AuthEntity>
  saveCredentials(email: string, password: string): Promise<AuthEntity>
}
