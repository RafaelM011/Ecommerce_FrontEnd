import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { ReactComponent as CrownIcon } from '../../assets/crown.svg'
import { ReactComponent as CartIcon } from '../../assets/shopping-bag.svg'

export const NavBar: React.FC = (): JSX.Element => {
  const currentUser = useContext(UserContext)

  const handleSignOut = (): void => {
    signOutUser()
      .then()
      .catch(err => { console.log(err) })
  }

  return (
    <div className="flex justify-between items-center w-full h-[120px]">
        <div className=''>
            <Link to='/'> <CrownIcon/>  </Link>
        </div>
        <div className="flex grow justify-end items-center gap-4">
            <h1> <Link to='/'> HOME </Link> </h1>
            <h1> <Link to='/shop'> SHOP </Link> </h1>
            {currentUser === null
              ? <h1> <Link to='/auth'> SIGN IN </Link> </h1>
              : <h1 onClick={handleSignOut}> <Link to='/auth'> SIGN OUT </Link> </h1>
            }
            <CartIcon className='w-[35px]'/>
        </div>
    </div>
  )
}
