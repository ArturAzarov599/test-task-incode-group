import { IUser } from '@common/interfaces/user.interface'

export interface IBossWithSubordinates extends IUser {
  subordinates: IUser[]
}
