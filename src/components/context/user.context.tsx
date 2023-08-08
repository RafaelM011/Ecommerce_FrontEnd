import { createContext, useEffect, useState } from 'react'
import { type UserAuth } from '../../app.types'
import { createUserDocumentFromAuth, handleAuthStateChange } from '../../utils/firebase/firebase.utils'

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

  useEffect(() => {
    const unsubscribe = handleAuthStateChange((user) => {
      if (user != null) {
        createUserDocumentFromAuth(user)
          .then(userDoc => { console.log(userDoc) })
          .catch(err => { console.log(err) })
        setCurrentUser(user)
      }
      console.log(user)
    })

    return unsubscribe
  }, [])
  return <UserContext.Provider value={value}> {children} </UserContext.Provider>
}
