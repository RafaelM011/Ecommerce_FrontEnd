import { useContext } from 'react'
import { type Product } from '../../app.types'
import { CartContext } from '../../context/cart/cart.context'

interface Props {
  product: Product
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { handleAddToCart } = useContext(CartContext)
  const { name, imageUrl, price } = product

  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className='relative flex flex-col basis-full min-[650px]:basis-[45%] lg:basis-[20%] h-[330px] group'>
      <div className='w-full grow' style={style}></div>
      <div className='flex justify-between w-full'>
        <h1>{name}</h1>
        <h1>{price}</h1>
      </div>
      <button
        onClick={() => { handleAddToCart(product) }}
        className='absolute bottom-[60px] left-[50%] -translate-x-1/2 w-10/12 h-fit py-4 bg-white text-black text-sm
        font-bold opacity-70 transition-all duration-200 hover:opacity-90 hover:scale-110 hidden group-hover:block'
      > ADD TO CART
      </button>
    </div>
  )
}
