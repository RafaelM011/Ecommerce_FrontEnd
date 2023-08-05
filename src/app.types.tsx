export interface Section {
  id: number
  title: string
  imageUrl: string
}

export interface UserAuth {
  displayName: string
  email: string
  uid: string
}

export interface UserData {
  email: string
  password: string
}

export interface FormData {
  username: string
  email: string
  password: string
  confirmPassword: string
}
