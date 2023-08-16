import { useSelector } from 'react-redux'
import { CheckoutItem } from '../../components/checkoutItem/checkout_item.component'
import { selectCartItems } from '../../store/cartSlice/cart.selectors'

const Checkout: React.FC = (): JSX.Element => {
  const cartElements = useSelector(selectCartItems)
  let total = 0

  cartElements.forEach(cartElement => {
    total += cartElement.quantity * cartElement.price
  })

  return (
    <section>
      <div className="w-12/12 max-w-[800px] h-fit mx-auto border-b-2 borded-black flex gap-4 justify-between">
        <h1 className="text-center text-xs sm:text-base md:text-lg font-medium w-[150px]"> PRODUCT </h1>
        <h1 className="text-center text-xs sm:text-base md:text-lg font-medium grow"> DESCRIPTION </h1>
        <h1 className="text-center text-xs sm:text-base md:text-lg font-medium grow"> QUANTITY </h1>
        <h1 className="text-center text-xs sm:text-base md:text-lg font-medium grow"> PRICE </h1>
        <h1 className="text-center text-xs sm:text-base md:text-lg font-medium grow"> REMOVE </h1>
      </div>
      {Array.from(cartElements.values()).map(cartElement => <CheckoutItem key={cartElement.id} quantity={cartElement.quantity} product={cartElement}/>)}
      <h1 className='text-xs sm:text-base md:text-lg font-bold w-12/12 max-w-[800px] mx-auto text-end'> TOTAL ${total}</h1>
    </section>
  )
}

export default Checkout
