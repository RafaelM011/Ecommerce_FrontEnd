import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Outlet } from 'react-router-dom'
import { NavBar } from './components/navbar/nav_bar.component'

import { createUserDocumentFromAuth, getDataFromDatabase, handleAuthStateChange } from './utils/firebase/firebase.utils'
import { setCurrentUser } from './store/userSlice/user.actions'
import { setCategories } from './store/categoriesSlice/categories.actions'

const App: React.FC = (): JSX.Element => {
  const dispatch = useDispatch()

  useEffect(() => {
    const unsubscribe = handleAuthStateChange((user) => {
      if (user != null) {
        createUserDocumentFromAuth(user)
          // .then()
          .catch(err => { console.log(err) })
        dispatch(setCurrentUser(user.email))
      } else {
        dispatch(setCurrentUser(null))
      }
    })

    return unsubscribe
  }, [])

  useEffect(() => {
    (async (): Promise<void> => {
      const data = await getDataFromDatabase()
      dispatch(setCategories(data))
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
