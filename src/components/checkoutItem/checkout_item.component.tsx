import { useDispatch } from 'react-redux'
import { type Product } from '../../app.types'
import { CART_ACTION_TYPES } from '../../store/cartSlice/cart.actions'

interface Props {
  quantity: number
  product: Product
}

export const CheckoutItem: React.FC<Props> = ({ quantity, product }): JSX.Element => {
  const dispatch = useDispatch()
  const { name, imageUrl, price } = product
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const handleAddOrRemove = (value: number): void => {
    if (quantity + value === 0) handleRemoveItem()
    else dispatch({ type: CART_ACTION_TYPES.UPDATE_QUANTITY, payload: { product, value } })
  }

  const handleRemoveItem = (): void => {
    dispatch({ type: CART_ACTION_TYPES.REMOVE_ITEM, payload: { product } })
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
