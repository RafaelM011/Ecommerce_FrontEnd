import { createContext, useState } from 'react'
import { type UserAuth } from '../../app.types'

interface Props {
  children: JSX.Element
}

interface Context {
  currentUser: UserAuth | null
  setCurrentUser: React.Dispatch<React.SetStateAction<UserAuth | null>>
}

const contextInitialState = {
  currentUser: null,
  setCurrentUser: () => null
}

export const UserContext = createContext<Context>(contextInitialState)

export const UserProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<UserAuth | null>(null)
  const value: Context = {
    currentUser,
    setCurrentUser
  }
  return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}
