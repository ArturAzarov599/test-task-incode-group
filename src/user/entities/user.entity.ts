import { Column, Entity, PrimaryColumn } from 'typeorm'

import { ERoles } from '@common/enums/roles.enum'
import { IUser } from 'src/common/interfaces/user.interface'

@Entity('user')
export class UserEntity implements IUser {
  @PrimaryColumn()
  email: string

  @Column({ name: 'first_name', nullable: false })
  firstName: string

  @Column({ name: 'last_name', nullable: false })
  lastName: string

  @Column({ enum: ERoles, default: ERoles.USER })
  role: ERoles

  @Column({ nullable: true, name: 'boss_email', default: null })
  bossEmail: string
}
