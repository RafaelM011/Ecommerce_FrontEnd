import { type Product } from '../../app.types'

interface Props {
  quantity: number | undefined
  product: Product
}

export const CartIcon: React.FC<Props> = ({ quantity, product }): JSX.Element => {
  const { name, imageUrl, price } = product
  const style = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }

  return (
    <div className='w-full h-[80px] flex mt-2 border-b-2 border-r-2 border-black rounded-xl'>
      <div className='basis-4/12 rounded-xl' style={style}></div>
      <div className='grow flex flex-col justify-center'>
        <h1 className='text-left px-4 font-bold'>{name}</h1>
        <h1 className='text-left px-4 font-bold'>{quantity} x ${price}</h1>
      </div>
    </div>
  )
}
