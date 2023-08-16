export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
} as const

const INITIAL_STATE = {
  currentUser: null
}

interface UserActions {
  type: keyof typeof USER_ACTION_TYPES
  payload: string | null
}
interface UserState {
  currentUser: string | null
}

export const userReducer = (state: UserState = INITIAL_STATE, action: UserActions): UserState => {
  const { type, payload } = action
  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return { ...state, currentUser: payload }
    default:
      return state
  }
}
