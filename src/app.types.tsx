export interface Section {
  id: number
  title: string
  imageUrl: string
}

export interface UserAuth {
  displayName: string | null
  email: string | null
  uid: string
}

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
