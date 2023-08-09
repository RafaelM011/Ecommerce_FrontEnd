import { createContext, useEffect, useState } from 'react'
import { type UserAuth } from '../../app.types'
import { createUserDocumentFromAuth, handleAuthStateChange } from '../../utils/firebase/firebase.utils'

interface Props {
  children: JSX.Element
}

export const UserContext = createContext<UserAuth | null>(null)

export const UserProvider: React.FC<Props> = ({ children }): JSX.Element => {
  const [currentUser, setCurrentUser] = useState<UserAuth | null>(null)

  useEffect(() => {
    const unsubscribe = handleAuthStateChange((user) => {
      if (user != null) {
        createUserDocumentFromAuth(user)
          // .then()
          .catch(err => { console.log(err) })
        setCurrentUser(user)
      } else {
        setCurrentUser(null)
      }
    })

    return unsubscribe
  }, [])
  return <UserContext.Provider value={currentUser}> {children} </UserContext.Provider>
}
