import { useDispatch, useSelector } from 'react-redux'
import { type Product } from '../../app.types'
import { removeCartItem, updateCartItemQuantity } from '../../store/cartSlice/cart.actions'
import { selectCartItems } from '../../store/cartSlice/cart.selectors'

interface Props {
  quantity: number
  product: Product
}

export const CheckoutItem: React.FC<Props> = ({ quantity, product }): JSX.Element => {
  const dispatch = useDispatch()
  const cartElements = useSelector(selectCartItems)
  const { name, imageUrl, price } = product
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const handleAddOrRemove = (value: number): void => {
    if (quantity + value === 0) handleRemoveItem()
    else dispatch(updateCartItemQuantity(cartElements, product, value))
  }

  const handleRemoveItem = (): void => {
    dispatch(removeCartItem(cartElements, product))
  }

  return (
    <div className="w-12/12 max-w-[800px] h-[200px] mx-auto py-4 border-b-2 borded-black flex gap-4 justify-between">
      <div className='h-[150px] w-[80px] sm:w-[150px] m-auto' style={style}></div>
      <h1 className='m-auto text-center text-xs sm:text-base md:text-lg grow'> {name} </h1>
      <div className='m-auto flex justify-center text-xs sm:text-base md:text-lg grow'>
        <span className='cursor-pointer' onClick={ () => { handleAddOrRemove(-1) }}> ❮ </span>
          <h1 className='mx-2'> {quantity} </h1>
        <span className='cursor-pointer' onClick={() => { handleAddOrRemove(1) }}> ❯ </span>
      </div>
      <h1 className='m-auto text-xs sm:text-base md:text-lg grow text-center'> ${price} </h1>
      <h1 className='m-auto text-xs sm:text-base md:text-lg cursor-pointer grow text-end' onClick={handleRemoveItem}> ❌ </h1>
    </div>
  )
}
