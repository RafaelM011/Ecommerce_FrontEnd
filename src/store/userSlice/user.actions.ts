export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
} as const

export interface UserActions {
  type: keyof typeof USER_ACTION_TYPES
  payload: string | null
}
