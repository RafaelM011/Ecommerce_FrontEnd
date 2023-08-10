import { useContext } from 'react'
import { CheckoutItem } from '../../components/checkoutItem/checkout_item.component'
import { CartContext } from '../../context/cart/cart.context'

const Checkout: React.FC = (): JSX.Element => {
  const { cartElements } = useContext(CartContext)
  let total = 0

  cartElements.forEach(cartElement => {
    total += cartElement.quantity * cartElement.product.price
  })
  return (
    <section>
      <div className="w-10/12 h-fit mx-auto border-b-2 borded-black grid grid-cols-5">
        <h1 className="text-center text-lg font-medium"> PRODUCT </h1>
        <h1 className="text-center text-lg font-medium"> DESCRIPTION </h1>
        <h1 className="text-center text-lg font-medium"> QUANTITY </h1>
        <h1 className="text-center text-lg font-medium"> PRICE </h1>
        <h1 className="text-center text-lg font-medium"> REMOVE </h1>
      </div>
      {Array.from(cartElements.values()).map(cartElement => <CheckoutItem key={cartElement.product.id} quantity={cartElement.quantity} product={cartElement.product}/>)}
      <h1 className='text-xl font-bold w-10/12 mx-auto text-end'> TOTAL ${total}</h1>
    </section>
  )
}

export default Checkout
