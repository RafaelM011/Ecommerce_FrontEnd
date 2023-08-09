import { useContext, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user.context'
import { signOutUser } from '../../utils/firebase/firebase.utils'

import { ReactComponent as CrownIcon } from '../../assets/crown.svg'
import { ReactComponent as CartIcon } from '../../assets/shopping-bag.svg'
import { Cart } from '../cartComponent/cart.component'

export const NavBar: React.FC = (): JSX.Element => {
  const [cartModal, setCartModal] = useState(false)
  const currentUser = useContext(UserContext)

  window.addEventListener('click', () => { cartModal && setCartModal(false); console.log('clicked') })

  const handleSignOut = (): void => {
    signOutUser()
      .then()
      .catch(err => { console.log(err) })
  }

  const handleCartClick = (event: React.MouseEvent<SVGSVGElement>): void => {
    event.stopPropagation()
    setCartModal(prevState => !prevState)
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
            <CartIcon className='w-[35px] cursor-pointer' onClick={handleCartClick}/>
            {cartModal && createPortal(<Cart/>, document.body)}
        </div>
    </div>
  )
}
