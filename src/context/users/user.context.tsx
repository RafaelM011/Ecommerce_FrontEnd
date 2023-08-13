import { createContext, useEffect, useReducer } from 'react'
import { createUserDocumentFromAuth, handleAuthStateChange } from '../../utils/firebase/firebase.utils'

const USER_INITIAL_STATE = {
  currentUser: null
}

const USER_ACTIONS = {
  SET_CURRENT_USER: 'SET_CURRENT_USER'
} as const

interface Props {
  children: JSX.Element
}

interface UserState {
  currentUser: string | null
}

interface UserAction {
  type: keyof typeof USER_ACTIONS
  payload: string | null
}

const userReducer = (state: UserState, action: UserAction): UserState => {
  const { type, payload } = action

  switch (type) {
    case 'SET_CURRENT_USER':
      return {
        ...state,
        currentUser: payload
      }
    default:
      return state
  }
}

export const UserContext = createContext<UserState>(USER_INITIAL_STATE)

export const UserProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [state, dispatch] = useReducer(userReducer, USER_INITIAL_STATE)

  useEffect(() => {
    const unsubscribe = handleAuthStateChange((user) => {
      if (user != null) {
        createUserDocumentFromAuth(user)
          // .then()
          .catch(err => { console.log(err) })
        dispatch({ type: USER_ACTIONS.SET_CURRENT_USER, payload: user.email })
      } else {
        dispatch({ type: USER_ACTIONS.SET_CURRENT_USER, payload: null })
      }
    })

    return unsubscribe
  }, [])
  return <UserContext.Provider value={state}> {children} </UserContext.Provider>
}
