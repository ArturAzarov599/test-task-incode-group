import { ERoles } from '@common/enums/roles.enum'

export interface IUser {
  email: string
  firstName: string
  lastName: string
  role: ERoles
  bossEmail: string
}
