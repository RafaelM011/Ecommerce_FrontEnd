import { useSelector } from 'react-redux'
import { CartIcon } from '../cartIcon/cart_icon.component'
import { Link } from 'react-router-dom'
import { selectCartItems } from '../../store/cartSlice/cart.selectors'

export const Cart: React.FC = (): JSX.Element => {
  const cartElements = useSelector(selectCartItems)

  return (
    <div
      className="absolute mr-10 top-[100px] right-0 bg-white border-black border-2 min-w-[220px] w-4/12 max-w-[240px] h-[350px]"
      onClick={event => { event.stopPropagation() }}
    >
      <div className="w-11/12 h-[250px] mx-auto my-4 overflow-auto scrollbar-hide">
        { Array.from(cartElements.values()).map(element => <CartIcon key={element.id} quantity={element.quantity} product={element}/>)}
      </div>
      <Link to='checkout'>
      <button
        onClick={ () => { document.body.click() }}
        className='w-6/12 h-fit py-4 relative bottom-0 left-[50%] -translate-x-1/2 bg-black text-white text-xs font-thin border-[1px]
        border-black hover:bg-white hover:text-black transition-all duration-500'
      >
      CHECKOUT
      </button>
      </Link>
    </div>
  )
}
