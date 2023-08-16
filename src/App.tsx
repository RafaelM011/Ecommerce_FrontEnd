import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/navbar/nav_bar.component'

import { createUserDocumentFromAuth, getDataFromDatabase, handleAuthStateChange } from './utils/firebase/firebase.utils'
import { USER_ACTION_TYPES } from './store/userSlice/user.actions'
import { CATEGORIES_ACTION_TYPES } from './store/categoriesSlice/categories.actions'

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

  useEffect(() => {
    (async (): Promise<void> => {
      const data = await getDataFromDatabase()
      dispatch({ type: CATEGORIES_ACTION_TYPES.SET_CURRENT_CATEGORIES, payload: data })
    })()
  }, [])

  return (
    <div className='px-10'>
        <NavBar/>
        <Outlet/>
    </div>
  )
}

export default App
