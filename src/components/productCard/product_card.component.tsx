import { useDispatch, useSelector } from 'react-redux'
import { type Product } from '../../app.types'
import { selectCartItems } from '../../store/cartSlice/cart.selectors'
import { addItemToCart } from '../../store/cartSlice/cart.actions'

interface Props {
  product: Product
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const dispatch = useDispatch()
  const cartElements = useSelector(selectCartItems)
  const { name, imageUrl, price } = product

  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  const handleAddItemToCart = (): void => {
    dispatch(addItemToCart(cartElements, product))
  }

  return (
    <div className='relative flex flex-col basis-full min-[650px]:basis-[45%] lg:basis-[20%] h-[330px] group'>
      <div className='w-full grow' style={style}></div>
      <div className='flex justify-between w-full'>
        <h1>{name}</h1>
        <h1>{price}</h1>
      </div>
      <button
        onClick={handleAddItemToCart}
        className='absolute bottom-[60px] left-[50%] -translate-x-1/2 w-10/12 h-fit py-4 bg-white text-black text-sm
        font-bold opacity-70 transition-all duration-200 hover:opacity-90 hover:scale-110 hidden group-hover:block'
      > ADD TO CART
      </button>
    </div>
  )
}
