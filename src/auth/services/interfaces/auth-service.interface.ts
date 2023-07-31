import { SignUpDto } from '@auth/dtos/sign-up.dto'

export interface IAuthService {
  signIn(email: string, password: string): Promise<string>
  signUp(dto: SignUpDto): Promise<boolean>
}
