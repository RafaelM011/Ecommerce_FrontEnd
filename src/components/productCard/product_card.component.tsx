import { type Product } from '../../app.types'

interface Props {
  product: Product
}

export const ProductCard: React.FC<Props> = ({ product }) => {
  const { name, imageUrl, price } = product
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className='relative flex flex-col w-[350px] h-[350px] grow group'>
      <div className='w-full grow' style={style}></div>
      <div className='flex justify-between w-full'>
        <h1>{name}</h1>
        <h1>{price}</h1>
      </div>
      <button
        type='submit'
        className='absolute bottom-[60px] left-[50%] -translate-x-1/2 w-10/12 h-fit py-4 bg-white text-black text-sm
        font-bold opacity-70 transition-all duration-200 hover:opacity-90 hover:scale-110 hidden group-hover:block'
      > ADD TO CART
      </button>
    </div>
  )
}
