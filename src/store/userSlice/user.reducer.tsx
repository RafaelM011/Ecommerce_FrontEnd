const USER_ACTIONS = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
} as const

const INITIAL_STATE = {
  currentUser: null
}

interface UserActions {
  type: keyof typeof USER_ACTIONS
  payload: string | null
}
interface UserState {
  currentUser: string | null
}

export const userReducer = (state: UserState = INITIAL_STATE, action: UserActions): UserState => {
  const { type, payload } = action

  switch (type) {
    case USER_ACTIONS.SET_CURRENT_USER:
      return { ...state, currentUser: payload }
    default:
      return state
  }
}
