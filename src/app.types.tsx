import { type User } from 'firebase/auth'

export interface Section {
  id: number
  title: string
  imageUrl: string
}

export type UserAuth = Pick<User, 'displayName' | 'email' | 'uid'>

export interface UserData {
  email: string
  password: string
}

export interface FormData {
  displayName: string
  email: string
  password: string
  confirmPassword: string
}
