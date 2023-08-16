import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/navbar/nav_bar.component'

import { createUserDocumentFromAuth, handleAuthStateChange } from './utils/firebase/firebase.utils'

import { USER_ACTION_TYPES } from './store/userSlice/user.reducer'

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = handleAuthStateChange((user) => {
      if (user != null) {
        createUserDocumentFromAuth(user)
          // .then()
          .catch(err => { console.log(err) })
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user.email })
      } else {
        dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: null })
      }
    })

    return unsubscribe
  }, [])

  return (
    <div className='px-10'>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default App
