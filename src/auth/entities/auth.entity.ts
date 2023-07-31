import { Column, Entity, PrimaryColumn } from 'typeorm'

import { IAuth } from '@auth/interfaces/auth.interface'

@Entity('auth')
export class AuthEntity implements IAuth {
  @PrimaryColumn()
  email: string

  @Column({ nullable: false })
  password: string
}
